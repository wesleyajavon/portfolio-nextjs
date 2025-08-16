export default function TestFonts() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white">Test des Polices</h1>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-mono text-green-400">font-mono (Monospace)</h2>
        <p className="text-lg font-mono text-white">
          Ceci est un texte en police monospace - 1234567890
        </p>
        
        <h2 className="text-2xl font-sans text-blue-400">font-sans (Sans-serif)</h2>
        <p className="text-lg font-sans text-white">
          Ceci est un texte en police sans-serif - 1234567890
        </p>
        
        <h2 className="text-2xl font-serif text-yellow-400">font-serif (Serif)</h2>
        <p className="text-lg font-serif text-white">
          Ceci est un texte en police serif - 1234567890
        </p>
        
        <h2 className="text-2xl font-poppins text-purple-400">font-poppins (Poppins)</h2>
        <p className="text-lg font-poppins text-white">
          Ceci est un texte en police Poppins - 1234567890
        </p>
      </div>
    </div>
  );
}
