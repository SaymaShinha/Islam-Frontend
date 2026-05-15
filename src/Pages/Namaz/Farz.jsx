export default function Farz() {
    const farzNamazData = [
        {
            namaz: "Fajr",
            time: "Starts at true dawn and ends when the first light of dawn appears.",
            rakats: [{ sunnat: { beforeFarzNamaz: 2,  afterFarzNamaz: 0 }, farz: 2 }]
        },
        {
            namaz: "Dhuhr",
            time: "It starts when the sun passes its highest point and ends when the shadow of an object equals its height.",
            rakats: [{ sunnat: { beforeFarzNamaz: 4, afterFarzNamaz: 2 }, farz: 4 }]
        },
        {
            namaz: "Asr",
            time: "It starts after Dhuhr and ends just before sunset.",
            rakats: [{ sunnat: { beforeFarzNamaz: 0,  afterFarzNamaz: 0 },  farz: 4 }]
        },
        {
            namaz: "Maghrib",
            time: "It starts immediately after sunset and ends when the twilight disappears.",
            rakats: [{ farz: 3, sunnat: { beforeFarzNamaz: 0, afterFarzNamaz: 2 } }]
        },
        {
            namaz: "Isha",
            time: "It starts after Maghrib and preferred before 1/3 night, but valid until Fajr.",
            rakats: [{ farz: 4, sunnat: { beforeFarzNamaz: 0, afterFarzNamaz: 2 } }]
        }
    ];

    return (
        <>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-3 m-4">
                <table className="table table-hover border-3 table-zebra border border-gray-400 border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th>Namaz</th>
                            <th>Namaz Time</th>
                            <th colSpan={3}>Raqat</th>
                        </tr>
                        <tr className="border-b">
                            <th></th>
                            <th></th>
                            <th>
                                Farz
                            </th>
                            <th colSpan={2}>
                                Sunnat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {farzNamazData.map((item) => (
                            <tr className="border-b">
                                <td className="border p-2">{item.namaz}</td>
                                <td className="border p-2">{item.time}</td>
                                <td className="border p-2">{item.rakats[0].farz}</td>
                                <td className="border p-2"> {item.rakats[0]?.sunnat?.beforeFarzNamaz != 0 && (`Before farz Namaz:  ${item.rakats[0]?.sunnat?.beforeFarzNamaz}`)} </td> <br />
                                <td> {item.rakats[0]?.sunnat?.afterFarzNamaz != 0 && (`After farz Namaz: ${item.rakats[0]?.sunnat?.afterFarzNamaz}`)} </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}