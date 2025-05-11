---
layout: post
title: "Interactive Edgeworth Box: Understanding Exchange and Pareto Efficiency"
date: 2024-03-21
categories: [Economics, Visualization]
---

<div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 1000; background: #1e1e1e;">
    <iframe src="/assets/edgeworth-box.html" width="100%" height="100%" frameborder="0" title="Interactive Edgeworth Box"></iframe>
</div>

<div style="height: 100vh;"></div>

## Understanding the Edgeworth Box

The Edgeworth Box is a fundamental tool in microeconomics that helps us visualize how two agents can exchange goods to reach mutually beneficial outcomes. This interactive visualization allows you to explore the concepts of:

- Indifference curves for both agents
- The contract curve (Pareto efficient allocations)
- Initial endowments and possible exchanges
- Utility maximization and Pareto efficiency

## Interactive Features

### 1. Preference Adjustment
You can modify each agent's preferences for goods X and Y using the sliders in the control panel. This changes the shape of their indifference curves, demonstrating how different preferences affect potential trades.

### 2. Initial Endowments
Adjust the initial allocation of goods between the two agents. The visualization shows how different starting points affect the potential for mutually beneficial exchange.

### 3. Real-time Utility Calculation
As you move the allocation point, the visualization calculates and displays:
- The current allocation for both agents
- Their respective utility levels
- Whether the current allocation is Pareto efficient

### 4. Contract Curve
The pink dashed line represents the contract curve - the set of all Pareto efficient allocations. Any point on this curve represents an allocation where no agent can be made better off without making the other worse off.

## Educational Value

This visualization helps understand several key economic concepts:

1. **Pareto Efficiency**: An allocation is Pareto efficient when no agent can be made better off without making another worse off.

2. **Mutually Beneficial Exchange**: The lens-shaped area between indifference curves shows where both agents can gain from trade.

3. **Utility Maximization**: The contract curve represents all points where both agents have maximized their utility given the other's utility level.

4. **Price Ratios**: The slope of the tangent line between indifference curves at any point represents the price ratio that would support that allocation.

## Technical Details

The visualization is built using:
- D3.js for interactive graphics
- HTML5 Canvas for smooth rendering
- Real-time utility calculations
- Responsive design that adapts to window size

The utility functions used are Cobb-Douglas type:
- Agent 1: U₁(x,y) = x^α₁ y^β₁
- Agent 2: U₂(x,y) = (1-x)^α₂ (1-y)^β₂

Where α and β are the preference parameters that you can adjust using the sliders.

## Try It Out!

1. Start by adjusting the preference parameters for both agents
2. Set different initial endowments
3. Drag the allocation point to explore different possible trades
4. Try to find Pareto efficient allocations
5. Observe how the indifference curves and contract curve change with different preferences

This interactive tool provides an intuitive way to understand the fundamental concepts of exchange and efficiency in economics. Feel free to experiment with different parameters and allocations to gain deeper insights into how markets work! 