---
title: "See, Spawn, Synchronize: A Digital Twin Pipeline for Smart Production Cells"
description: A digital twin that synchronizes objects bidirectionally between a real and a virtual production cell using only a single RGB-D camera.
background: /assets/theme/images/title-img.png
image: /assets/theme/images/publications/see-spawn-synchronize.png
author: "Malte Herrmann, Dominykas Strazdas, Ayoub Al-Hamadi"
categories: [Publication]
conference: "**Machines 2026**, 14(9), 972 &middot; MDPI &middot; [doi.org/10.3390/machines14090972](https://doi.org/10.3390/machines14090972)"
tags: [publication, digital twin, Industry 5.0, human-robot collaboration, object detection]
---

## Abstract

With Industry 5.0, human-robot collaboration has become the center of attention. This has introduced new challenges, where workspaces become highly dynamic, leading to safety concerns for robots and especially for humans. This makes it important to have a realistic and accurate digital representation of a production cell and its components in environments for movement planning and remote supervision.

This paper presents a digital twin of a smart production cell, synchronizing objects bidirectionally between a real and virtual workspace with minimal effort using only a single RGB-D camera. A fine-tuned YOLO-based detector identifies tools and items in the scene, estimates their spatial position, and spawns them in Unity relative to the robot via coordinate transformation. Experiments with different scanning velocities demonstrate a mean planar spawn deviation of 5.82 mm (standard deviation 2.24 mm) at 0.1 m/s at 0.7 m height, while maintaining a constant depth bias of -0.54 mm.

Once spawned, objects can be manipulated freely via drag-and-drop within the simulation. Upon confirmation, a motion planning module calculates trajectories to execute these changes physically. Across 95 trials and 1805 object placements, the system achieves 100% success within working bounds, successfully executing complex tasks such as repositioning objects and stacking them into pyramid structures. The presented system provides a framework to see, spawn, and synchronize industrial workspaces, enabling rapid setup and safe remote supervision of smart production cells in highly dynamic industrial environments.

## Details

| | |
|---|---|
| **Authors** | Malte Herrmann, Dominykas Strazdas, Ayoub Al-Hamadi |
| **Published in** | Machines 2026, 14(9), 972 (MDPI) |
| **Published** | 28 August 2026 |
| **Keywords** | digital twin, smart production cell, Industry 5.0, human-robot collaboration, digital twin synchronization, object detection, motion planning |
| **DOI** | [10.3390/machines14090972](https://doi.org/10.3390/machines14090972) |
