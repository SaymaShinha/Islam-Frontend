import { useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NamazHome() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col p-4 m-4">
                <div className="p-4 m-3">
                    <h3 className="overflow-x-clip">
                        There are five pillars of Islam. Namaz is one of them.

                        Namaz is a connection between Allah(the creator) and Banda(the servant).

                        There are five Farz (Compulsory) namaz in a day.

                        <br />

                    </h3>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div className="mt-4">
                        <h2 className="text-start">Importance of Namaz.</h2>
                        <ol className="text-start" style={{ listStyle: "number" }}>
                            <li>Connection between Creator and Creation.</li>
                            <li>Peace.</li>
                            <li>Key of Jannah.</li>
                            <li>Way of getting repentance.</li>
                            <li>Getting rewards.</li>
                        </ol>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-start">Mandatory of Namaz.</h2>
                        <ol className="text-start" style={{ listStyle: "number" }}>
                            <li>Wadu(Essential Purity, cleaning).</li>
                            <li>Intention (Niyyah).</li>
                            <li>Qibla</li>
                            <li>Waqt</li>
                            <li>Recitation of Quran.</li>
                            <li>Ruku.</li>
                            <li>Sajda.</li>
                            <li>Final Sitting.</li>
                            <li>Maintain Correct Order.</li>
                        </ol>
                    </div>
                </div>

                <div>
                    <h2 className="m-4 p-3">“Indeed, prayer prohibits immorality and wrongdoing.” _Surah Al-Ankabut 29:45</h2>

                    <a href="/farz" className="text-green-800 underline text-end">
                        Five times Farz Namaz, including sunnah. </a>
                </div>
            </div>
        </>
    )
}