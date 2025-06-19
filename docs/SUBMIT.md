# How to Submit

1. Before starting your project, make a [repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) for your project. The name should be in this format: `project-name`. **Do not put any characters other than `A-Z`, `0-9`, and `-` in your folder name. NO SPACES!** Make sure you have Hackatime set up before you get started, or we will be unable to approve your project.

2. In your repository, create the following structure, replacing folder-name and stuff for your project's info, copy everything exactly except for what is *inside* `/frontend`, `/backend`, and `/hardware`, as those directories are where **your** code will go.
```
/
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

3. *Optional:* Make your BOM, after figuring out what parts you need for your project, find THS parts on digikey, and get the part numbers and quantity you need for them:
```csv
Digikey Part Number,Quantity
732-5008-ND,2
```
4. Add your code into the respective directories: `hardware` is for your device's code, `backend` is for your backend, and `frontend` is for your website.
5. Submit! Go [here](https://forms.hackclub.com/illumination) to submit your project!
