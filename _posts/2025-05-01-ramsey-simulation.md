---
layout: post
title: "Ramsey-Cass-Koopmans Growth Model Simulation"
date: 2025-05-01
categories: [Economics, Simulation]
---


The Ramsey sim is now live! 

<div class="ramsey-simulation">
    <iframe src="/assets/ramsey-simulation.html" 
            style="width: 100%; height: 800px; border: none; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
            title="Ramsey-Cass-Koopmans Model Simulation">
    </iframe>
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