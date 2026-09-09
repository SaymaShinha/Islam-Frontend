export default function NamazNavList() {
  return (
    <li className="relative">
      <details>
        <summary className="cursor-pointer">Namaz</summary>

        <ul className="menu dropdown-content absolute left-0 top-full z-[9999] mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl">
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
  );
}
