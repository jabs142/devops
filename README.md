# Devops CI/CD Project 🚧
<br> 

## 💻 Overview: 
This project is an exploration of Continuous Integration/Continuous Deployment (CI/CD) concepts using GitHub Actions. The goal is to set up workflows that automatically trigger various actions whenever changes are committed to the repository.

## 💻 Requirements:
* An action is triggered once someone commits a change in the repository
* The GitHub repository and the README.md file provide sufficient explanation of the project, the steps taken, and the thought process behind the implementation.


## 💻 Basis of this project: 
* This project is an opportunity to practice CI/CD concepts and apply some DevOps practices.
* Given my beginner status and time constraints, the approach is exploratory in nature, focusing on breadth of learning rather than in-depth implementation. 


## 💻 Technologies & Tools Used:

![](https://skills.thijs.gg/icons?i=js,html,css,git,github)

- JavaScript 
- HTML
- CSS 
- Git
- GitHub (GitHub Actions)


### GitHub Actions 
- Feature of GitHub that enables users to automate their workflows
- It allows developers to build, test, and deploy their code without leaving the GitHub platform.
- YAML files in .github/workflows directory is used to define workflows 


## Demo:

### Notification:
- Whenever a Git commit is made, an email is sent to the owner of the repository.

Future improvements: 
1) Instead of just the owner of the repository, all contributors could receive an email
2) Set up rules and groups, such that only certain individuals are notified of changes to specific files.


### Lint:
[![Super-Linter](https://github.com/jabs142/devops/actions/workflows/lint.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

- Basic set up for running the super linter tool 
- Establishes best practices and consistent formatting across multiple programming languages
- By default, it covers an extensive list of languages 

- Future improvements:
1) Adding additional linter configurations or rules.
```yaml
- name: Super-linter
  uses: super-linter/super-linter@v6.3.1
  env:
    DEFAULT_BRANCH: main
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    VALIDATE_JAVASCRIPT_ES: true
    VALIDATE_PYTHON_FLAKE8: true
    VALIDATE_MARKDOWN: true
```
If you set any of the VALIDATE_[LANGUAGE] variables to true, super-linter defaults to leaving any unset variable to false (only validate those languages).

2) Configuring the Super-Linter to ignore certain files or directories.
```yaml
- name: Super-linter
  uses: super-linter/super-linter@v6.3.1
  env:
    DEFAULT_BRANCH: main
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    FILTER_REGEX_INCLUDE: .*  # Lint all files
    FILTER_REGEX_EXCLUDE: .*test/.*|.*node_modules/.*  # Exclude test and node_modules directories
```

## 🤔 Thoughts:
* This project has provided a good opportunity to explore the capabilities of GitHub Actions and how they can be used to implement CI/CD workflows. 
* While the current implementation is relatively simple, it lays the groundwork for more complex and advanced automation in the future.

## 🎈 Future Improvements:
* Expand the notification system to include other communication channels, such as Slack or Microsoft Teams.
* Integrate automated testing and deployment to cloud platforms, such as AWS or Google Cloud.
* Explore more advanced linting configurations and integrations with other tools, like code coverage reporting.

![GitHub Contribution Snake](dist/ocean.gif)
