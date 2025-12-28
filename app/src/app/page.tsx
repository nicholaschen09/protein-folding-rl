

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]" style={{minHeight: '100vh'}}>
      <div className="max-w-xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#f8f9fc] mb-3 tracking-tight">mini alphafold</h1>
          <p className="text-base text-[#b2bbc5] leading-relaxed font-medium">reinforcement learning for protein structure prediction</p>
        </header>

        {/* Blog Posts */}
        <main className="space-y-10">

          {/* Post 1 */}
          <article>
            <h2 className="text-2xl font-bold text-[#f8f9fc] mb-3 tracking-tight leading-tight">
              deepmind's alphafold: revolutionizing protein structure prediction
            </h2>
            <p className="text-[#b2bbc5] mb-4 text-sm font-semibold">nicholas chen · november 21, 2025 · 10 min read</p>

            <div className="space-y-4 text-[#f8f9fc] text-sm leading-6">
              <p>
                in 2020, deepmind's alphafold achieved accuracy comparable to experimental methods for predicting protein structures. unlike deepmind's rl-based systems like alphago, alphafold uses supervised learning - it was trained on the protein data bank to predict structures from sequences. alphafold 3 uses diffusion models similar to image generators, starting with disordered atoms and iteratively refining them into structures.
              </p>
              <p>
                while alphafold excels at predicting static final structures, reinforcement learning offers a different approach: modeling folding as sequential decision-making, exploring pathways and intermediate states. rl is particularly valuable for problems like protein docking, inverse folding, and understanding folding kinetics where exploration and step-by-step optimization matter more than a single correct answer.
              </p>
            </div>
          </article>



          {/* Post 2 */}
          <article>
            <h2 className="text-2xl font-bold text-[#f8f9fc] mb-3 tracking-tight leading-tight">
              reinforcement learning for protein folding: current approaches
            </h2>
            <p className="text-[#b2bbc5] mb-4 text-sm font-semibold">march 8, 2024</p>

            <div className="space-y-4 text-[#f8f9fc] text-sm leading-6">
              <h3 className="text-lg font-semibold text-[#f8f9fc] mt-6 mb-3">this project's approach</h3>
              <p>
                this project implements reinforcement learning for protein folding using a custom gymnasium environment. the rl agent learns to fold proteins by optimizing an energy-based reward function that incorporates physical constraints: bond lengths, bond angles, van der waals interactions, and steric clash penalties.
              </p>

              <h4 className="text-base font-semibold text-[#f8f9fc] mt-4 mb-2">energy-based rewards</h4>
              <p>
                instead of sparse rewards only at the native state, this approach uses continuous energy minimization. the reward function combines bond energy (maintaining proper c-alpha distances), angle energy (preserving backbone angles), lennard-jones van der waals interactions, and heavy penalties for atomic clashes. this provides dense learning signals throughout the folding process.
              </p>

              <h4 className="text-base font-semibold text-[#f8f9fc] mt-4 mb-2">implementation</h4>
              <p>
                the system uses pytorch for neural network policy learning, with the protein structure represented as 3D coordinates. the agent explores conformational space step-by-step, receiving immediate feedback through energy-based rewards. the approach scales from 2D to 3D protein models, allowing progressive learning from simpler to more complex structures.
              </p>
            </div>
          </article>

        </main>

        {/* Consolidated References */}
        <div className="mt-16 pt-8 border-t border-[#2f3034]">
          <h3 className="text-xl font-bold text-[#f8f9fc] mb-6">references</h3>
          <div className="text-[#b2bbc5] text-sm space-y-2">
            <p><a href="https://deepmind.google/science/alphafold/" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">deepmind alphafold</a> - official alphafold website and core technology</p>
            <p><a href="https://www.nature.com/articles/s41586-021-03819-2" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">nature: highly accurate protein structure prediction with alphafold</a></p>
            <p><a href="https://alphafold.ebi.ac.uk/" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">alphafold protein structure database</a></p>
            <p><a href="https://predictioncenter.org/" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">casp - critical assessment of protein structure prediction</a></p>
            <p><a href="https://www.rcsb.org/" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">protein data bank (pdb)</a></p>
            <p><a href="https://foldingathome.org/" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">folding@home</a> - distributed computing for protein folding</p>
            <p><a href="https://www.nature.com/articles/s42256-023-00740-0" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">nature machine intelligence: rl for protein design</a></p>
            <p><a href="https://github.com/deepmind/alphafold" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">alphafold github repository</a></p>
            <p><a href="https://openreview.net/forum?id=3OGT5_JFe9Q" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">iclr: reinforcement learning for molecular design</a></p>
            <p><a href="https://www.cell.com/cell-systems/fulltext/S2405-4712(21)00327-8" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">cell systems: protein structure prediction review</a></p>
          </div>
        </div>

      </div>
    </div>
   );
}
