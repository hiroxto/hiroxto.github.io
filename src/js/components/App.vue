<template>
  <b-jumbotron>
    <h1>Hiroto-K.github.io</h1>
    <p class="lead">
      This site is a github pages of <a href="https://github.com/hiroto-k">
        hiroto-k
      </a>.
    </p>

    <div class="mb-3">
      <h2>Links</h2>
      <b-list-group>
        <b-link
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          v-text="link.name"
          class="list-group-item list-group-item-action"
        >
        </b-link>
      </b-list-group>
    </div>

    <div class="mb-3">
      <ul class="list-inline">
        <li
          v-for="(icon, index) in icons"
          :key="index"
          class="list-inline-item"
        >
          <a :href="icon.url" class="text-muted">
            <font-awesome-icon
              :icon="icon.icon"
              class="fa-2x"
            >
            </font-awesome-icon>
          </a>
        </li>
      </ul>
    </div>

    <template v-if="hasError">
      <div class="mt-3 mb-3">
        <h2>Public Repositories</h2>
        <h3>Error</h3>
        <p class="text-danger">
          Sorry, An error has occurred.
        </p>
      </div>
    </template>
    <template v-else>
      <div class="mt-3 mb-3">
        <h2>
          Public Repositories
          <b-badge variant="primary">
            {{ reposLength }}
          </b-badge>
        </h2>

        <b-list-group>
          <b-link
            v-for="repo in repos"
            :key="repo.id"
            :href="repo.html_url"
            v-text="repo.full_name"
            v-b-popover.hover.focus.bottom="repo.description"
            class="list-group-item list-group-item-action"
          >
          </b-link>
        </b-list-group>
      </div>

      <div class="mt-3 mb-3">
        <h2>
          GitHub Pages
          <b-badge variant="primary">
            {{ gitHubPagesLength }}
          </b-badge>
        </h2>
        <b-list-group>
          <b-link
            v-for="gh_page in gitHubPages"
            :key="gh_page.id"
            :href="gh_page.gh_page_url"
            v-text="gh_page.full_name"
            class="list-group-item list-group-item-action"
          >
          </b-link>
        </b-list-group>
      </div>
    </template>

    <b-button
      @click="reloadRepos()"
      variant="primary"
      class="btn-sm float-right mb-5"
    >
      Reload repos
    </b-button>
  </b-jumbotron>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'App',
    data () {
      return {
        repos: [],
        gitHubPages: [],
        hasError: false,
      };
    },
    computed: {
      links () {
        return [
          {
            name: 'Home Page',
            url: 'https://hiroto-k.net/',
          },
          {
            name: 'Profile',
            url: 'https://hiroto-k.net/profile',
          },
          {
            name: 'Blog (Programming)',
            url: 'https://hiroto-k.hatenablog.com/',
          },
          {
            name: 'Blog (Train photo)',
            url: 'https://train-photo-blog.hiroto-k.net/',
          },
        ];
      },
      icons () {
        return [
          {
            name: 'Home page',
            url: 'https://hiroto-k.net/',
            icon: ['fas', 'home'],
          },
          {
            name: 'Profile',
            url: 'https://hiroto-k.net/profile',
            icon: ['fas', 'user-alt'],
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com/hiroto_k_',
            icon: ['fab', 'twitter'],
          },
          {
            name: 'GitHub',
            url: 'https://github.com/hiroto-k',
            icon: ['fab', 'github'],
          },
        ];
      },
      reposLength () {
        return this.repos.length;
      },
      gitHubPagesLength () {
        return this.gitHubPages.length;
      },
    },
    methods: {
      reloadRepos () {
        this.hasError = false;
        this.updateRepos();
      },
      updateRepos () {
        this.repos = [];
        this.gitHubPages = [];

        axios
          .get('https://api.github.com/users/hiroto-k/repos?per_page=100')
          .then(response => response.data)
          .then(repos => {
            /** @type {Object[]} repos **/
            repos.forEach(repo => {
              /** @type {Object} repo **/

              this.repos.push(repo);

              // Ignore hiroto-k/hiroto-k.github.io (38377426)
              if (repo.has_pages && repo.id !== 38377426) {
                repo.gh_page_url = `https://hiroto-k.github.io/${repo.name}`;
                this.gitHubPages.push(repo);
              }
            });

            this.hasError = false;

            return repos;
          })
          .catch(e => {
            console.log(e);

            this.hasError = true;
          });
      },
    },
    mounted () {
      this.updateRepos();
    },
  };
</script>

<style scoped>

</style>
