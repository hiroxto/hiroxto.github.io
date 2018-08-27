<template>
  <div>
    <div class="jumbotron">
      <div class="container">

        <h1>Hiroto-K.github.io</h1>
        <p class="lead">This is a web pages of <a href="https://github.com/hiroto-k">hiroto-k</a>.</p>

        <h2>Links</h2>
        <div class="list-group">
          <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            class="list-group-item list-group-item-action"
          >
            {{ link.name }}
          </a>
        </div>

        <hr>

        <div v-if="hasError">
          <h2>Public Repositories</h2>
          <h3>Error</h3>
          <p class="text-danger">Sorry, An error has occurred.</p>
        </div>
        <div v-else>
          <div class="repos-list">
            <h2>Public Repositories <span class="badge badge-primary">{{ reposLength }}</span></h2>

            <div class="list-group">
              <a
                v-for="repo in repos"
                :key="repos.id"
                :href="repo.html_url"
                class="list-group-item list-group-item-action"
              >
                {{ repo.full_name }}
              </a>
            </div>
          </div>

          <div class="repos-list">
            <h2>GitHub Pages <span class="badge badge-primary">{{ gitHubPagesLength }}</span></h2>
            <div class="list-group">
              <a
                v-for="gh_page in gitHubPages"
                :key="gitHubPages.id"
                :href="['https://hiroto-k.github.io/' + gh_page.name]"
                class="list-group-item list-group-item-action">
                {{ gh_page.full_name }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <page-footer></page-footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        links: [
          {
            name: 'Home Page',
            url: 'https://hiroto-k.net/',
          },
          {
            name: 'Profile',
            url: 'https://hiroto-k.net/profile',
          },
          {
            name: 'Project',
            url: 'https://hiroto-k.net/project',
          },
          {
            name: 'Blog (Programming)',
            url: 'https://hiroto-k.hatenablog.com/',
          },
          {
            name: 'Blog (Train)',
            url: 'https://hiroto-k.github.io/blog/',
          },
        ],
        repos: [],
        gitHubPages: [],
        hasError: false,
      };
    },
    computed: {
      reposLength: function () {
        return this.repos.length;
      },
      gitHubPagesLength: function () {
        return this.gitHubPages.length;
      },
    },
    mounted: function () {
      fetch('https://api.github.com/users/hiroto-k/repos?per_page=100').then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      }).then((json) => {
        json.forEach((repo) => {
          // Ignore hiroto-k/hiroto-k.github.io
          if (repo.id === 38377426) {
            return;
          }

          this.repos.push(repo);

          if (repo.has_pages) {
            this.gitHubPages.push(repo);
          }
        });

        this.hasError = false;

        return json;
      }).catch((e) => {
        console.log(e);

        this.hasError = true;
      });
    },
  };
</script>

<style scoped>
  .repos-list {
    margin-top: 1em;
  }
</style>
