---
layout: post
title: "Ramsey-Cass-Koopmans Growth Model Simulation"
date: 2024-03-21
categories: [Economics, Simulation]
---

# Ramsey-Cass-Koopmans Growth Model Simulation

This post demonstrates an interactive simulation of the Ramsey-Cass-Koopmans growth model, a fundamental framework in modern macroeconomics that describes optimal economic growth paths.

<div class="ramsey-simulation" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1000; background: #1e1e1e;">
    <iframe src="/assets/ramsey-simulation.html" 
            style="width: 100%; height: 100%; border: none;"
            title="Ramsey-Cass-Koopmans Model Simulation">
    </iframe>
</div>

<div style="height: 100vh; visibility: hidden;">
    <!-- This div ensures the post has enough height to scroll -->
</div>

## About the Simulation

The Ramsey-Cass-Koopmans model is a neoclassical model of economic growth that extends the Solow model by endogenizing the savings rate. This simulation allows you to explore:

1. The phase diagram showing the dynamics of capital and consumption
2. Time series of capital and consumption per effective worker
3. The steady state equilibrium and transition dynamics
4. The impact of various economic parameters

## Interactive Features

The simulation includes several interactive elements:

- **Parameter Controls**: Adjust key economic parameters:
  - Capital share (α)
  - Depreciation rate (δ)
  - Discount rate (ρ)
  - Risk aversion (θ)
  - Population growth (n)
  - Technological growth (g)
  - Total factor productivity (A)

- **Phase Diagram**: Click anywhere on the phase diagram to start a new trajectory from that point
- **Time Series**: Watch how capital and consumption evolve over time
- **Steady State**: The simulation shows the steady state values and loci

## Technical Details

The simulation is built using:
- HTML5 Canvas for visualization
- JavaScript for numerical integration
- Modern CSS for styling and responsiveness

The model solves the following differential equations:
- Capital accumulation: ḱ = f(k) - c - (n+g+δ)k
- Consumption growth: ċ/c = (f'(k) - (ρ+θg))/θ

Where:
- f(k) = Ak^α is the production function
- f'(k) is the marginal product of capital
- k is capital per effective worker
- c is consumption per effective worker

Feel free to experiment with different parameters to see how they affect the economy's growth path and steady state. 