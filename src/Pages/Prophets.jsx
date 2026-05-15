
function Prophets() {
    const prophets = [
        { id: 1, name: "Adam", surah:"" },
        { id: 2, name: "Idris" },
        { id: 3, name: "Nuh" },
        { id: 4, name: "Hud" },
        { id: 5, name: "Salih" },
        { id: 6, name: "Lut" },
        { id: 7, name: "Ibrahim" },
        { id: 8, name: "Ismail" },
        { id: 9, name: "Ishaq" },
        { id: 10, name: "Yaqub" },
        { id: 11, name: "Yusuf" },
        { id: 12, name: "Shuayb" },
        { id: 13, name: "Ayyub" },
        { id: 14, name: "Dhul-Kifl" },
        { id: 15, name: "Musa" },
        { id: 16, name: "Harun" },
        { id: 17, name: "Dawud" },
        { id: 18, name: "Sulaiman" },
        { id: 19, name: "Ilyas" },
        { id: 20, name: "Alyasa" },
        { id: 21, name: "Yunus" },
        { id: 22, name: "Zakariya" },
        { id: 23, name: "Yahya" },
        { id: 24, name: "Isa" },
        { id: 25, name: "Muhammad" }
    ];

    return (
        <>
            <div>
                <h2 className="mt-3">Prophets Name Mentioned in Quran</h2>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 m-4 p-3">
                    {prophets.map((prophet) => (
                        <div className="card card-border bg-gray-600 shadow-md m-4" key={prophet.id}>
                            <div className="card-body">
                                <h2 className="card-title">{prophet.name}</h2>
                                <p></p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-primary"></button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Prophets;
