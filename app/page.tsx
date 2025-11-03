export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* ====================================================
        PANNEAU 1: GAUCHE (TECH)
        (Aucun changement ici, il utilise :root)
      ==================================================== */}
      <div className="relative flex flex-col justify-center items-center w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen p-8 lg:p-16 bg-background  theme-tech">
        <div className="max-w-md">
          <h1 className="text-4xl lg:text-5xl font-displayTech mb-2 text-primary">
            Concepteur
            <br />
            <span className="text-accent">&</span> Développeur
          </h1>
          <p className="text-secondary">
            Je transforme des idées complexes en solutions élégantes et
            performantes.
          </p>
        </div>
      </div>

      {/* ====================================================
        PANNEAU 2: DROITE (EXPLORE)
        LA CORRECTION : On applique 'theme-explore' à un PARENT
      ==================================================== */}

      {/* 1. Ce wrapper PARENT définit le thème et prend la largeur */}
      <div className="w-full lg:w-1/2 theme-explore">
        {/* 2. Ce div ENFANT utilise les classes (bg-background)
           qui vont maintenant hériter du thème 'explore' (cyan)
        */}
        <div className="relative flex flex-col justify-center items-center min-h-[50vh] lg:min-h-screen p-8 lg:p-16 bg-background  text-right">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-displayExplore mb-2 text-primary">
              Voyageur
              <br />
              <span className="text-accent">&</span>
              Curieux
            </h1>
            <p className="text-secondary">
              Quand je ne code pas, j&apos;explore de nouvelles cultures et
              horizons.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
