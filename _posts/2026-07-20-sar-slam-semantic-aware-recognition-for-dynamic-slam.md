---
title: "SAR-SLAM: Semantic-Aware Recognition for Dynamic SLAM in Robotic Applications"
description: An RGB-D SLAM framework that combines semantic segmentation and geometric motion verification to stay robust in scenes with moving people and objects.
background: /assets/theme/images/title-img.png
image: /assets/theme/images/publications/sar-slam.png
author: "Basheer Al-Tawil, Magnus Jung, Thorsten Hempel, Ayoub Al-Hamadi"
categories: [Publication]
conference: "**Robotics 2026**, 15(7), 136 &middot; MDPI &middot; [doi.org/10.3390/robotics15070136](https://doi.org/10.3390/robotics15070136)"
tags: [publication, SLAM, semantic segmentation, autonomous navigation, ROS2]
---

## Abstract

Simultaneous Localization and Mapping (SLAM) is essential for autonomous systems navigating in human-centric environments, yet conventional systems fail when people and objects move through the scene. This paper introduces SAR-SLAM (Semantic-Aware Recognition SLAM), an RGB-D SLAM framework that robustly handles dynamic scenes containing moving people and objects using dual semantic geometric processing.

First, we employ YOLOv8-based semantic segmentation to identify dynamic objects and generate initial detection masks. Second, we apply RANSAC-based homography analysis to perform geometric motion verification, distinguishing truly moving objects from stationary ones by analyzing feature correspondence patterns. Third, an adaptive fusion mechanism combines both semantic and geometric evidence while incorporating temporal consistency and coverage constraints to maintain system stability.

The system is implemented as a modular ROS 2 package, enabling smooth integration with robotic systems and compatibility with existing navigation frameworks. SAR-SLAM reduces Absolute Trajectory Error by up to 96% over ORB-SLAM3 on the dynamic sequences of the TUM RGB-D benchmark, and remains competitive with state-of-the-art dynamic SLAM methods across a range of dynamic scenarios.

## Details

| | |
|---|---|
| **Authors** | Basheer Al-Tawil, Magnus Jung, Thorsten Hempel, Ayoub Al-Hamadi |
| **Published in** | Robotics 2026, 15(7), 136 (MDPI) |
| **Published** | 20 July 2026 |
| **Keywords** | dynamic SLAM, semantic segmentation, geometric motion verification, autonomous navigation, human-robot interaction, ROS 2 |
| **DOI** | [10.3390/robotics15070136](https://doi.org/10.3390/robotics15070136) |
