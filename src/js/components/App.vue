<template>
    <div class="jumbotron">
        <div class="container">
            <h1>Hiroto-K.github.io</h1>
            <p>This is a web pages of <a href="https://github.com/Hiroto-K">Hiroto-K</a>.</p>

            <h2>Links</h2>
            <div class="list-group">
                <a v-for="(link, name) in links" class="list-group-item" :href="link">
                    {{ name }}
                </a>
            </div>

            <div v-if="!has_error">
                <h2>Public Repositories <span class="label label-primary">{{ repos_length }}</span></h2>

                <div class="list-group">
                    <a v-for="repo in repos" :key="repos.id" :href="repo.html_url" class="list-group-item">
                        {{ repo.full_name }}
                    </a>
                </div>

                <h2>GitHub Pages <span class="label label-primary">{{ gh_pages_length }}</span></h2>
                <div class="list-group">
                    <a v-for="gh_page in gh_pages" :key="gh_pages.id"
                       :href="['https://hiroto-k.github.io/' + gh_page.name]" class="list-group-item">
                        {{ gh_page.full_name }}
                    </a>
                </div>
            </div>
            <div v-else>
                <h2>Public Repositories</h2>
                <h3>Error</h3>
                <p class="text-warning">Sorry, An error has occurred.</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                links: {
                    "Home Page": "https://hiroto-k.net/",
                    "Profile": "https://hiroto-k.net/profile",
                    "Project": "https://hiroto-k.net/project",
                    "Blog (Programming)": "https://hiroto-k.hatenablog.com/",
                    "Blog (Train)": "https://hiroto-k.github.io/blog/",
                    "Contact": "https://hiroto-k.net/contact"
                },
                repos: [],
                gh_pages: [],
                has_error: false,
            };
        },
        computed: {
            repos_length: function () {
                return this.repos.length
            },
            gh_pages_length: function () {
                return this.gh_pages.length;
            }
        },
        mounted: function () {
            fetch("https://api.github.com/users/Hiroto-K/repos?per_page=100").then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response.json();
            }).then((json) => {
                json.forEach((repo) => {
                    this.repos.push(repo);

                    if (repo.has_pages) {
                        this.gh_pages.push(repo);
                    }
                });

                this.has_error = false;

                return json;
            }).catch((e) => {
                console.log(e);

                this.has_error = true;
            });
        }
    }
</script>

<style scoped>
</style>
