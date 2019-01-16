<template>
  <div>
    <h4>1. 旅客列車と貨物列車の判別</h4>
    <p>列車番号の下2桁を見る。(e.g. <code>1列車</code>の場合<code>01</code>、<code>2022列車</code>の場合<code>22</code>、<code>5094列車</code>の場合<code>94</code>。)</p>
    <p><code>00〜49</code>なら旅客列車、<code>50〜99</code>なら貨物列車。</p>

    <h5>2. 旅客列車の場合</h5>
    <ul>
      <li
        v-for="(listHtml, key) in passengerListHtmls"
        :key="key"
        v-html="listHtml"
      >
      </li>
    </ul>

    <h5>3. 貨物列車の場合</h5>
    <ul>
      <li
        v-for="(item, listKey) in freightListHtmls"
        :key="listKey"
      >
        <div v-html="item.html"></div>
        <template v-if="item.list !== undefined">
          <ul>
            <li
              v-for="(html, itemListKey) in item.list"
              :key="itemListKey"
              v-html="html"
            >
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HowToCalc',
    computed: {
      passengerListHtmls: function () {
        return [
          '桁数が1,2,4桁で、4桁のときの百位が<code>0</code>の場合、<strong>特急客</strong>。',
          '桁数が3,4桁かつ、百位が<code>0</code>以外で下2桁が<code>00〜19</code>の場合、<strong>急客</strong>',
          '桁数が3,4桁かつ、百位が<code>0</code>以外で下2桁が<code>20〜49</code>の場合、<strong>客</strong>',
          '千位が<code>6</code>以上の場合は種別の頭に<code>臨</code>が付く。(e.g. <strong>臨特急</strong>, <strong>臨急客</strong>, <strong>臨客</strong>)',
        ];
      },
      freightListHtmls: function () {
        return [
          {
            html: '千位が<code>0～5</code>、百位が<code>0</code>の場合、<strong>高速貨</strong>。下2桁で<strong>高速貨A</strong>と<strong>高速貨B</strong>に分かれる。',
            list: [
              '下2桁が<code>50〜69</code>の場合、<strong>高速貨A</strong>。',
              '下2桁が<code>70〜99</code>の場合、<strong>高速貨B</strong>。',
            ],
          },
          {
            html: '千位が<code>0,1</code>、百位が<code>1〜9</code>、下2桁が<code>50〜59</code>の場合、<strong>高速貨C</strong>。',
          },
          {
            html: '千位が<code>1,3,4,5</code>、百位が<code>1～9</code>の場合、<strong>専貨</strong>。下2桁で<strong>専貨A</strong>と<strong>専貨B</strong>に分かれる。',
            list: [
              '下2桁が<code>60～89</code>の場合、<strong>専貨A</strong>。',
              '下2桁が<code>90～99</code>の場合、<strong>専貨B</strong>。',
            ],
          },
          {
            html: '千位が<code>8</code>以上の場合は種別の頭に<code>臨</code>が付く。(e.g. <strong>臨高速貨A</strong>, <strong>臨専貨A</strong>)',
          },
        ];
      },
    },
  };
</script>

<style scoped>

</style>
