# Protein Folding with Reinforcement Learning

## Setup Guide

### Installation Steps

These commands should be run in the **TERMINAL**, not in Jupyter or Python:

#### 1. Install Miniconda
```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init zsh
source ~/.zshrc
```

#### 2. Create Environment
```bash
conda create -n protein-rl python=3.10
conda activate protein-rl
```

#### 3. Install Packages
```bash
pip install jupyter numpy pandas matplotlib torch stable-baselines3 gym biopython plotly seaborn
```

#### 4. Launch Jupyter
```bash
jupyter notebook
```

---

## Verify Installation

Run this Python code to check everything is working:
```python
import sys
print(f"Python version: {sys.version}")

# Check all required packages
packages_to_check = [
    'numpy', 'pandas', 'matplotlib', 'torch', 
    'gym', 'stable_baselines3', 'Bio', 'plotly'
]

print("\nPackage versions:")
for package in packages_to_check:
    try:
        if package == 'Bio':
            import Bio
            print(f"✓ biopython: {Bio.__version__}")
        else:
            module = __import__(package)
            version = getattr(module, '__version__', 'unknown')
            print(f"✓ {package}: {version}")
    except ImportError:
        print(f"✗ {package}: NOT INSTALLED")

print("\n✓ Setup complete! Ready to start protein folding with RL!")
```

---

## Project Overview

This project uses Reinforcement Learning to predict 3D protein structures, inspired by AlphaFold.

### Key Features
- Custom Gym environment for protein folding
- Energy-based reward functions
- Visualization of folding process
- Progressive difficulty (2D → 3D proteins)

### Getting Started
1. Complete the installation steps above
2. Open the Jupyter notebook: `protein_folding_rl.ipynb`
3. Run the verification code to ensure all packages are installed
4. Start with the 2D HP model tutorial