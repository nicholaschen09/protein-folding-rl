# PROTEIN FOLDING WITH REINFORCEMENT LEARNING - SETUP GUIDE
# INSTALLATION STEPS (Already completed in terminal):
# These commands were run in the TERMINAL, not in Jupyter:
# 
# 1. Install Miniconda:
#    mkdir -p ~/miniconda3
#    curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
#    bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
#    rm ~/miniconda3/miniconda.sh
#    ~/miniconda3/bin/conda init zsh
#    source ~/.zshrc
#
# 2. Create environment:
#    conda create -n protein-rl python=3.10
#    conda activate protein-rl
#
# 3. Install packages:
#    pip install jupyter numpy pandas matplotlib torch stable-baselines3 gym biopython plotly seaborn
#
# 4. Launch Jupyter:
#    jupyter notebook

# VERIFY INSTALLATION - Run this cell to check everything is working:

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