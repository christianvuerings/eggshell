#Eggshell

The pre-release of CalCentral

## Dependencies

* [Ruby 1.9.3-p286](http://www.ruby-lang.org/en/)
* [Rubygems](http://rubyforge.org/frs/?group_id=126)
* [Rails 3.2.8](http://rubyonrails.org/download)
* [Bundler](http://gembundler.com/rails3.html)
* [Rvm](https://rvm.io/rvm/install/) - Ruby version managers

## Installation

1. Install postgres
```bash
brew update
brew install postgresql
initdb /usr/local/var/postgres
```

2. Start postgres, add the user and create the necessary dbs
```bash
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
psql postgres
create database eggshell_development;
create user eggshell_development;
create user eggshell_development with password 'secret';
grant all privileges on database eggshell_development to eggshell_development;
create database eggshell_test;
```

3. Fork this repository, then:
```bash
git clone git@github.com:[your_github_acct]/eggshell.git
```

4. Go inside the `eggshell` repository
```bash
cd eggshell
```

5. Download the appropriate gems
```bash
bundle install
```

6. Start the server
```bash
rails s
```

### Livereload

Livereload will automatically reload your browser when you're making changes to JS/CSS or HTML.
If you want to use this, you should use [rack-livereload](https://github.com/johnbintz/rack-livereload) or install [LiveReload Safari/Chrome extension](http://github.com/mockko/livereload#readme)

## Debugging

### Segmentation fault

```bash
.../lib/sqlite3/sqlite3_native.bundle: [BUG] Segmentation fault
```

Fix it with running:

```bash
gem uninstall sqlite3
gem install sqlite3
```