export default function NamazNavList() {
  return (
    <>
      <li>
        <details>
          <summary>
            {/* Namaz icon */}
            Namaz
          </summary>

          <ul className="w-48">
            <li>
              <a href="/namaz">Introductory</a>
            </li>

            <li>
              <a href="/farz-namaz">Farz Namaz</a>
            </li>

            <li>
              <a href="/wajib-namaz">Wajib Namaz</a>
            </li>

            <li>
              <a href="/nafl-namaz">Nafl Namaz</a>
            </li>

            <li>
              <a href="/other-namaz">Special & Other Salah</a>
            </li>

            <li>
              <a href="/fix-mistakes-of-prayer">Fix Mistakes of Prayer</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
}
