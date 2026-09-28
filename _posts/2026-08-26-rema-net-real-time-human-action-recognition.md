---
title: "REMA-Net: Real-Time Human Action Recognition via Caption-Guided Dual-Stream Attention"
description: A dual-stream framework fusing RGB features with caption embeddings for real-time human action recognition on embedded robotic platforms.
background: /assets/theme/images/title-img.png
image: /assets/theme/images/publications/rema-net.png
author: "Basheer Al-Tawil, Magnus Jung, Ayoub Al-Hamadi"
categories: [Publication]
conference: "**Preprint 2026** &middot; submitted to Elsevier &middot; [ssrn.com/abstract=7357566](https://ssrn.com/abstract=7357566)"
tags: [publication, action recognition, human-robot interaction, multimodal learning]
---

## Abstract

Real-time human action recognition (HAR) is important for intelligent systems, particularly in human-robot interaction, where robots must respond quickly to human behavior. However, many existing approaches rely on long video sequences or computationally intensive features, limiting their suitability for time-sensitive and resource-constrained environments.

In this paper, we propose REMA-Net, a dual-stream framework that combines visual features from raw RGB frames with semantic representations derived from caption embeddings. Temporal order is incorporated through sinusoidal positional encoding, and a multi-head self-attention mechanism models inter-frame dependencies. A cross-modal knowledge distillation strategy enables information transfer between semantic and visual streams while maintaining a compact architecture.

REMA-Net achieves 96.8%, 73.0%, and 38.2% accuracy on UCF101, HMDB51, and HAA500 datasets, respectively. On an NVIDIA Jetson Orin connected with a TIAGo robot, the model maintains low inference latency, indicating feasibility for embedded robotic platforms. Cross-dataset evaluation without a shared label-mapping protocol shows a similar predictive structure, with confidence and entropy measures remaining within a bounded range across unexplored domains.

## Details

| | |
|---|---|
| **Authors** | Basheer Al-Tawil, Magnus Jung, Ayoub Al-Hamadi |
| **Status** | Preprint, submitted to Elsevier (not yet peer reviewed) |
| **Date** | August 2026 |
| **Keywords** | human action recognition, human-robot interaction, dual-stream learning, cross-modal knowledge distillation, caption-guided multimodal learning |
| **Preprint** | [ssrn.com/abstract=7357566](https://ssrn.com/abstract=7357566) |
