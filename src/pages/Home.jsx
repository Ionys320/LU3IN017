import { useState } from "react";

/**
 * Page d'accueil (destinée aux utilisateurs connectés).
 * Affiche d'un côté la liste des forums, de l'autre la liste des derniers messages publiés.
 * @returns 
 */
function Home() {
    const [forums, setForums] = useState[{
        name: "announcement",
        title: "Annonces",
        description: "Toutes les annonces de l'association"
    },
    {
        name: "install-party",
        title: "Install Party",
        description: "Toutes les infos sur les Install party"
    },
    {
        name: "studies",
        title: "Etudes",
        description: "Pour parler des études"
    },
    {
        name: "ca",
        title: "CA",
        description: "Réservé aux membres du CA",
        closed: true
    }];

    const [lastPosts, setLastPosts] = useState([{
        content: "Hello, World!",
        forum: "announcement",
    }]);

    return (
        <Forums />
        <LastPosts />
    )
}

export default Home;