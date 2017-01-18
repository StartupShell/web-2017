[![Deployment status from DeployBot](https://startupshell.deploybot.com/badge/23779030056685/95569.svg)](http://deploybot.com)

## Startup Shell Redesign 2017

Master branch is deployed to production almost automagically. Add [deploy: production] to commit to deploy. The site is built using Jekyll.

### Contributing

#### Mac Dev Environment

1. Install Jekyll
  * `[sudo] gem install jekyll`
2. Download Repo
  * `[sudo] git clone https://github.com/StartupShell/web-2017.git`
3. Run Locally
  * `jekyll serve`

#### Windows Dev Environment

TL;DR if chocolatey is installed:
```
choco install ruby -y
gem install bundler
gem install jekyll
git clone https://github.com/startupshell/web-2017.git && cd web-2017
jekyll serve
```

1. Install Chocolatey (skip if already installed)
  * Open a command prompt with admin privs
  * `@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
  * Close command prompt
2. Install Ruby
  * `choco install ruby -y`
3. Install Bundler
  * `gem install bundler`
4. Install Jekyll
  * `gem install jekyll`
5. Download Repo
  * `git clone https://github.com/StartupShell/web-2017.git`
6. Run Locally
  * `jekyll serve`
