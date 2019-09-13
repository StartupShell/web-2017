---

---
## Contributing

#### Mac Dev Environment

1. Install Jekyll

* `[sudo] gem install jekyll`

1. Download Repo

* `[sudo] git clone https://github.com/StartupShell/web-2017.git`

1. Run Locally

* `jekyll serve`

#### Windows Dev Environment

TL;DR if chocolatey is installed:

    choco install ruby -y
    gem install bundler
    gem install jekyll
    git clone https://github.com/startupshell/web-2017.git && cd web-2017
    jekyll serve

1. Install Chocolatey (skip if already installed)

* Open a command prompt with admin privs
* `Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
* Close command prompt

1. Install Ruby

* `choco install ruby -y`

1. Install Bundler

* `gem install bundler`

1. Install Jekyll

* `gem install jekyll`

1. Download Repo

* `git clone https://github.com/StartupShell/web-2017.git`

1. Run Locally

* `jekyll serve`

#### If you get an SSL error when attempting to install bundler or any other gem

See http://guides.rubygems.org/ssl-certificate-update/ to fix this problem. 