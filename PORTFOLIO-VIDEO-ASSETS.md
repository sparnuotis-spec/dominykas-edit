# Portfolio video uploads

Upload each item's two MP4 files into `client/public/videos/portfolio/`. The website paths below are used directly by the player. Keep exactly one thumbnail per item in the `thumbnail` field in `client/src/data.ts`.

| Portfolio item | Low rendition (720p50) | High rendition (1080p60) | Existing thumbnail path |
|---|---|---|---|
| Autotoja Toyota auto salonas | `autotoja-720p50.mp4` | `autotoja-1080p60.mp4` | `/images/autotoja.webp` |
| Kaunas HANZA 2026 Ugnies šou | `kaunas-hanza-ugnis-720p50.mp4` | `kaunas-hanza-ugnis-1080p60.mp4` | `/manus-storage/sports-action-fpv_6397dda8.jpg` |
| Vilnius Gravity Cup 2026 | `vgc-2026-720p50.mp4` | `vgc-2026-1080p60.mp4` | `/manus-storage/real-estate-fpv_775b2002.jpg` |
| Tautvydo Dvaras | `tautvydo-dvaras-720p50.mp4` | `tautvydo-dvaras-1080p60.mp4` | `/manus-storage/event-livestream-fpv_4273f4e1.jpg` |
| Išmanios gamyklos ir logistikos centro pristatymas | `industrial-robotics-reel-720p50.mp4` | `industrial-robotics-reel-1080p60.mp4` | `/manus-storage/commercial-factory-fpv_f410793a.jpg` |

The player starts from the 720p50 file and switches to 1080p60 when the video enters fullscreen, preserving playback position. It switches back to 720p50 when fullscreen ends. The MP4 files are not included yet; add them before expecting portfolio playback to work.
