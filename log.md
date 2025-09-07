# Project Log

- Initialized project and created log.md
- Cloned `yihong0618/running_page` repository
- Created Python virtual environment
- Installed Python dependencies
- Linked and pushed to user's GitHub repository
- Modified `get_garmin_secret.py` to use `config.yaml`
- Refactored `garmin_sync.py` to handle login and sync
- Synced Garmin data
- Installed frontend dependencies
- Configured Mapbox token to use environment variable
- Updated `IS_CHINESE` to `false` for English display


python run_page/gen_svg.py --from-db --title "Run 2025" --type grid --athlete "Dongjie"  --output assets/grid.svg --min-distance 5.0 --special-color yellow --special-color2 red --special-distance 7 --special-distance2 10 --use-localtime