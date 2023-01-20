import { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/VarunSAthreya/anilist-graphql/main/__generated__/letter.json"
        )
            .then((res) => res.json())
            .then((json) => {
                setLetters(json);
            });
    }, []);

    return (
        <div className="keypad">
            {letters &&
                letters.map((l) => {
                    const color = usedKeys[l.key];
                    return (
                        <div key={l.key} className={color}>
                            {l.key}
                        </div>
                    );
                })}
        </div>
    );
};

export default Keypad;
