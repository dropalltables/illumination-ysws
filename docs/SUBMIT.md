# How to Submit

1. After finishing your project, make a [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository) of this repository.
2. Go to the submissions directory, and create a folder with this format `project-name`. **Do not put any characters other than `A-Z`, `0-9`, and `-` in your folder name. NO SPACES!**
3.  Go to the submissions directory, and append your project to [submissions.yml](/submissions/submissions.yml) in this format:
```yaml
- "project-folder-name"
```
4. Go into your submission's folder, and create the following structure, replacing folder-name and stuff for your project's info, copy everything exactly except for what is *inside* `/frontend`, `/backend`, and `/hardware`, those directories are where **your** code will go.
```
/submissions/folder-name
├── folder-name.yml
├── bom.csv
├── showcase.png
├── frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
├── backend
│   ├── server.js
│   ├── sqlite.db
│   ├── package.json
│   └── package-lock.json
└── hardware
    ├── code.py
    ├── utils
    │   ├── processor.py
    │   └── wifi-comms.py
    ├── settings.toml
    └── lib
        └── adafruit_ticks
            └── adafruit_ticks.mpy
```
5. Add info to your `folder-name.yml` with this format:
```yaml
title: "Project title"
description: "A short one sentence description of your project. "
gallery: "The name of your website's showcase PNG. (Probably showcase.png)"
bom: "The name of your CSV BOM file. (Probably bom.csv)"
time: "Time in hours (e.g. 20.2h) you spent on this YSWS (be honest, less than 20 hours might be accepted if your project is high effort)."
demo: "Unlisted YouTube demo of your website, backend, and prototype if applicable."
advanced: "true/false":
  - "hardware"
  - "credits"
  - "DELETE me after reading: write either true or false for advanced project, if true choose ONE of these, and delete the other"
tags:
  - "tags about languages and topics related to your project"
  - "arduino"
  - "notifications"
  - "nodejs"
```
6. Make your BOM, after figuring out what parts you need for your project, find THS parts on digikey, and get the part numbers and quanity you need for them:
```csv
Digikey Part Number,Quantity
732-5008-ND,2
```
7. **You're done!** Make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork), and use the template, filling in your info.