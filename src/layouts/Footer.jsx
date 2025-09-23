function Footer() {
  return (
    <footer className="flex h-28 flex-col items-center justify-center bg-gray-100 text-black">
      <h2 className="mb-3">Contact us</h2>
      <div className="flex space-x-4">
        <button
          type="button"
          className="mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          onClick={() =>
            window.open(
              'https://twitter.com/intent/tweet?text=I%27m%20attending%20Google%20Developer%20Groups%20GDG%20Detroit%20w%2F%20Michigan%20DevFest%20on%20Dec%202.',
              '_blank'
            )
          }
        >
          <svg
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            role="img"
            alt="X (Twitter) icon"
            data-testid="XIcon"
            title="Share on X (Twitter)"
            color="currentColor"
          >
            <path
              d="M9.51664 6.79444L15.3449 0.0195312H13.9638L8.90311 5.90209L4.86115 0.0195312H0.199219L6.31146 8.915L0.199219 16.0195H1.58041L6.92464 9.80735L11.1933 16.0195H15.8552L9.5163 6.79444H9.51664ZM7.62491 8.99337L7.00561 8.10758L2.07808 1.05927H4.19951L8.17609 6.74748L8.79538 7.63327L13.9645 15.0271H11.843L7.62491 8.99371V8.99337Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          className="mb-2 inline-block rounded-full bg-white p-3 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/shareArticle?mini=true&url=https://gdg.community.dev/e/m8hffb/',
              '_blank'
            )
          }
        >
          <svg
            className="h-5 w-5 fill-current"
            role="img"
            alt="LinkedIn icon"
            title="Share on LinkedIn"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
            </g>
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer
