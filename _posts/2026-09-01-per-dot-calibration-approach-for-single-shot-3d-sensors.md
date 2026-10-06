---
title: "Per-Dot Calibration Approach for Single-Shot 3D Sensors Using Structured Light"
description: A per-dot disparity-to-depth calibration for single-shot structured light 3D sensors, combined with an improved chessboard target detection method.
background: /assets/theme/images/title-img.png
image: /assets/theme/images/publications/ZBS_PerDotCalib_Fig.png
author: "David Reese, Evgeny Degtyarev, Rico Nestler"
categories: [Publication]
conference: "**3D-iSA 2026** &middot; Anwendungsbezogener Workshop „3D in Science & Applications“ &middot; Accepted September 2026"
tags: [publication, 3D imaging, structured light, calibration]
---

## Abstract

We present advances in the calibration pipeline for single-shot 3D sensors based on structured light dot pattern projection, building upon our previous work on projector-camera calibration via subpixel plane reconstruction. The primary contribution is a per-dot disparity-to-depth mapping that associates each projected dot with an individual hyperbolic depth model, enabling spatially resolved compensation of systematic depth errors across the full sensor working volume. To support the dense target sampling required for this calibration, we additionally present an improved chessboard target detection method related to OpenCV's Radon-transform-based corner detector, overcoming its key limitations regarding partially visible targets at image borders while also improving detection throughput for interactive use. Results are evaluated by comparing the systematic depth error of two sensor variants before and after the new calibration, providing a direct measure of improvement in 3D data quality.

## Details

| | |
|---|---|
| **Authors** | David Reese, Evgeny Degtyarev, Rico Nestler |
| **Published in** | Anwendungsbezogener Workshop „3D in Science & Applications“ (3D-iSA) 2026 |
| **Status** | Accepted September 2026 |
| **Keywords** | Single-Shot 3D Imaging, Structured Light Calibration, Dot Pattern Projection, Per-Dot Disparity-to-Depth Mapping, Chessboard Target Detection, Radon Target Detection |
