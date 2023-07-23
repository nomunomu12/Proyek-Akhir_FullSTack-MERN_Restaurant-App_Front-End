import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center pt-2 flex justify-between text-neutral-content text-slate-500">
      <div className="items-center flex">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current mr-4"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="">
          2023 Created by <strong>Nurul Ilmi dan Nabila Safinatun Najah</strong>{" "}
          - All right reserved
        </p>
      </div>
      <div className="flex gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://youtube.com/@nabilasn21"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/nl.ilmi/"
          target="_blank"
          rel="noreferrer"
          className="-mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="40px"
            height="40px"
          >
            <circle cx="13" cy="29" r="2" fill="#ee3e54" />
            <circle cx="77" cy="13" r="1" fill="#f1bc19" />
            <circle cx="50" cy="50" r="37" fill="#fce0a2" />
            <circle cx="83" cy="15" r="4" fill="#f1bc19" />
            <circle cx="87" cy="24" r="2" fill="#ee3e54" />
            <circle cx="81" cy="76" r="2" fill="#fbcd59" />
            <circle cx="15" cy="63" r="4" fill="#fbcd59" />
            <circle cx="25" cy="87" r="2" fill="#ee3e54" />
            <circle cx="18.5" cy="53.5" r="2.5" fill="#fff" />
            <circle cx="21" cy="67" r="1" fill="#f1bc19" />
            <circle cx="80" cy="34" r="1" fill="#fff" />
            <path
              fill="#3231c7"
              d="M72.3,33.7v32.6c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h32.6 C69.61,27.7,72.3,30.39,72.3,33.7z"
            />
            <path
              fill="#7228ad"
              d="M72.3,48.04V66.3c0,3.31-2.69,6-6,6H33.7c-3.31,0-6-2.69-6-6V33.7c0-3.31,2.69-6,6-6h18.26 C60.6,32.29,67.71,39.4,72.3,48.04z"
            />
            <path
              fill="#b11e93"
              d="M70,71c0,0.01,0,0.01,0,0.02c-1.02,0.8-2.3,1.28-3.7,1.28H33.7c-3.31,0-6-2.69-6-6V33.7 c0-1.4,0.48-2.68,1.28-3.7c0.01,0,0.01,0,0.02,0C51.64,30,70,48.36,70,71z"
            />
            <path
              fill="#db1a58"
              d="M62,71c0,0.44-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V38.03C28.13,38.01,28.56,38,29,38 C47.23,38,62,52.77,62,71z"
            />
            <path
              fill="#e4273e"
              d="M54,71c0,0.43-0.01,0.87-0.03,1.3H33.7c-3.31,0-6-2.69-6-6V46.03C28.13,46.01,28.57,46,29,46 C42.81,46,54,57.19,54,71z"
            />
            <path
              fill="#f47c22"
              d="M47,71c0,0.44-0.02,0.87-0.05,1.3H33.7c-3.31,0-6-2.69-6-6V53.05C28.13,53.02,28.56,53,29,53 C38.94,53,47,61.06,47,71z"
            />
            <path
              fill="#ef9922"
              d="M41,71c0,0.44-0.02,0.87-0.07,1.3H33.7c-3.31,0-6-2.69-6-6v-7.23C28.13,59.02,28.56,59,29,59 C35.63,59,41,64.37,41,71z"
            />
            <path
              fill="#472b29"
              d="M66.3,73H33.7c-3.694,0-6.7-3.006-6.7-6.7V33.7c0-3.694,3.006-6.7,6.7-6.7h32.6 c3.694,0,6.7,3.006,6.7,6.7v32.6C73,69.994,69.994,73,66.3,73z M33.7,28.4c-2.923,0-5.3,2.377-5.3,5.3v32.6 c0,2.922,2.377,5.3,5.3,5.3h32.6c2.923,0,5.3-2.377,5.3-5.3V33.7c0-2.922-2.377-5.3-5.3-5.3H33.7z"
            />
            <g>
              <path
                fill="#fff"
                d="M49.99,65.45c-3.982,0-5.464-0.011-6.978-0.08c-1.388-0.062-2.469-0.271-3.505-0.677 c-1.006-0.388-1.793-0.899-2.553-1.659c-0.753-0.754-1.265-1.542-1.658-2.553c-0.395-1.007-0.604-2.088-0.677-3.505 c-0.069-1.525-0.08-3.006-0.08-6.977c0-3.964,0.011-5.442,0.08-6.968c0.062-1.388,0.271-2.468,0.676-3.504 c0.394-1.021,0.905-1.808,1.659-2.553c0.754-0.753,1.541-1.265,2.554-1.659c1.035-0.405,2.116-0.613,3.504-0.677 c1.565-0.07,3.065-0.09,6.978-0.09c3.914,0,5.411,0.02,6.967,0.09c1.388,0.063,2.469,0.271,3.506,0.677 c1.021,0.394,1.807,0.905,2.552,1.659c0.747,0.738,1.262,1.524,1.669,2.553c0.397,1.046,0.604,2.128,0.667,3.504 c0.07,1.58,0.09,3.078,0.09,6.967c0,3.897-0.02,5.397-0.09,6.978c-0.063,1.377-0.269,2.458-0.667,3.505 c-0.407,1.018-0.923,1.806-1.669,2.552c-0.743,0.752-1.527,1.264-2.543,1.659c-1.049,0.405-2.133,0.614-3.515,0.676 C55.443,65.439,53.964,65.45,49.99,65.45z M48.68,37.45c-2.752,0-4.263,0.021-5.575,0.079c-1.342,0.062-2.082,0.287-2.577,0.476 c-0.617,0.242-1.059,0.53-1.525,0.998c-0.467,0.466-0.755,0.905-0.993,1.516c-0.191,0.498-0.417,1.24-0.479,2.585 c-0.068,1.506-0.079,2.895-0.079,6.887c0,4,0.011,5.39,0.079,6.895c0.062,1.336,0.287,2.076,0.477,2.572 c0.239,0.619,0.526,1.061,0.99,1.525c0.473,0.465,0.916,0.752,1.53,0.994c0.479,0.188,1.204,0.411,2.576,0.475 c1.56,0.07,3.04,0.089,6.888,0.089c3.856,0,5.338-0.019,6.895-0.089c1.405-0.065,2.147-0.303,2.583-0.477 c0.604-0.234,1.044-0.518,1.514-0.978c0.466-0.476,0.755-0.919,1.001-1.534c0.186-0.487,0.405-1.217,0.469-2.575 c0.069-1.573,0.089-3.055,0.089-6.897c0-3.835-0.02-5.315-0.089-6.886c-0.063-1.356-0.282-2.086-0.467-2.57 c-0.239-0.62-0.525-1.061-0.99-1.525c-0.498-0.49-0.903-0.75-1.548-0.997c-0.464-0.185-1.178-0.408-2.56-0.473 c-1.535-0.07-3.018-0.089-6.896-0.089H48.68z"
              />
              <path
                fill="#472b29"
                d="M49.99,34.8c3.909,0,5.405,0.019,6.956,0.09c1.359,0.061,2.415,0.265,3.428,0.66 c0.985,0.38,1.744,0.873,2.467,1.605c0.719,0.71,1.216,1.47,1.608,2.459c0.389,1.024,0.59,2.081,0.652,3.429 c0.07,1.576,0.089,3.072,0.089,6.957c0,3.893-0.019,5.39-0.089,6.966c-0.062,1.35-0.263,2.407-0.648,3.42 c-0.396,0.989-0.894,1.751-1.617,2.474c-0.716,0.725-1.473,1.219-2.453,1.6c-1.023,0.395-2.083,0.599-3.436,0.66 c-1.509,0.069-2.986,0.08-6.956,0.08c-3.978,0-5.458-0.011-6.967-0.08c-1.359-0.061-2.415-0.264-3.426-0.66 c-0.971-0.375-1.731-0.869-2.465-1.602c-0.728-0.729-1.222-1.489-1.603-2.468c-0.384-0.981-0.587-2.038-0.659-3.423 c-0.069-1.522-0.08-3.001-0.08-6.968c0-3.959,0.011-5.436,0.08-6.957c0.061-1.359,0.264-2.415,0.66-3.427 c0.38-0.985,0.873-1.745,1.603-2.465c0.727-0.727,1.488-1.221,2.467-1.602c1.009-0.394,2.065-0.598,3.424-0.66 C44.585,34.819,46.082,34.8,49.99,34.8 M49.99,62.79c3.861,0,5.345-0.019,6.907-0.089c1.443-0.067,2.211-0.314,2.658-0.493 c0.641-0.248,1.105-0.547,1.609-1.041c0.487-0.497,0.791-0.964,1.053-1.62c0.191-0.501,0.419-1.255,0.483-2.649 c0.07-1.576,0.089-3.061,0.089-6.908c0-3.839-0.019-5.322-0.089-6.898c-0.065-1.391-0.292-2.145-0.483-2.65 c-0.249-0.645-0.562-1.126-1.049-1.614c-0.518-0.509-0.96-0.794-1.625-1.048c-0.486-0.194-1.225-0.425-2.645-0.492 c-1.539-0.07-3.024-0.089-6.907-0.089H48.68c-2.756,0-4.27,0.021-5.588,0.079c-1.376,0.064-2.141,0.296-2.658,0.493 c-0.641,0.251-1.122,0.566-1.609,1.053c-0.487,0.486-0.801,0.965-1.051,1.605c-0.197,0.513-0.431,1.28-0.495,2.662 c-0.069,1.511-0.08,2.901-0.08,6.898c0,4.004,0.01,5.397,0.08,6.907c0.064,1.372,0.297,2.136,0.493,2.65 c0.252,0.654,0.556,1.121,1.05,1.615c0.491,0.482,0.973,0.795,1.613,1.046c0.496,0.194,1.247,0.426,2.656,0.492 C44.655,62.771,46.138,62.79,49.99,62.79 M49.99,34.3c-3.991,0-5.454,0.021-6.989,0.09c-1.417,0.064-2.522,0.279-3.583,0.693 c-1.047,0.408-1.86,0.937-2.639,1.714c-0.78,0.771-1.31,1.585-1.716,2.639c-0.416,1.062-0.63,2.168-0.693,3.584 c-0.069,1.537-0.08,3.019-0.08,6.979c0,3.969,0.011,5.452,0.08,6.99c0.075,1.444,0.289,2.549,0.693,3.583 c0.407,1.045,0.937,1.859,1.715,2.639c0.786,0.786,1.601,1.314,2.639,1.715c1.062,0.416,2.168,0.63,3.584,0.693 c1.537,0.07,3.02,0.081,6.989,0.081c3.96,0,5.441-0.01,6.979-0.081c1.41-0.063,2.519-0.277,3.594-0.693 c1.051-0.409,1.861-0.938,2.629-1.715c0.771-0.771,1.303-1.583,1.726-2.64c0.409-1.075,0.619-2.18,0.684-3.583 c0.068-1.536,0.09-3,0.09-6.989c0-3.979-0.021-5.443-0.09-6.979c-0.064-1.402-0.274-2.506-0.685-3.585 c-0.421-1.062-0.953-1.876-1.724-2.637c-0.771-0.78-1.584-1.309-2.639-1.716c-1.063-0.416-2.169-0.629-3.585-0.693 C55.443,34.321,53.982,34.3,49.99,34.3L49.99,34.3z M49.99,62.29c-3.842,0-5.32-0.019-6.876-0.089 c-1.336-0.062-2.036-0.278-2.496-0.458c-0.582-0.229-1-0.5-1.445-0.938c-0.441-0.441-0.705-0.846-0.934-1.438 c-0.182-0.476-0.399-1.195-0.46-2.494c-0.068-1.492-0.079-2.881-0.079-6.884c0-3.995,0.011-5.382,0.079-6.875 c0.061-1.308,0.278-2.026,0.462-2.506c0.225-0.574,0.497-0.99,0.938-1.43c0.44-0.441,0.856-0.713,1.438-0.941 c0.473-0.18,1.192-0.399,2.499-0.459C44.42,37.722,45.93,37.7,48.68,37.7h1.311c3.876,0,5.355,0.019,6.885,0.088 c1.346,0.063,2.033,0.277,2.482,0.457c0.612,0.234,0.99,0.478,1.46,0.94c0.436,0.436,0.708,0.854,0.934,1.438 c0.176,0.463,0.389,1.17,0.45,2.493c0.069,1.557,0.089,3.036,0.089,6.875c0,3.847-0.02,5.328-0.089,6.886 c-0.062,1.322-0.273,2.027-0.451,2.494c-0.234,0.586-0.501,0.996-0.943,1.448c-0.445,0.437-0.851,0.7-1.432,0.924 c-0.424,0.169-1.13,0.396-2.501,0.459C55.32,62.271,53.84,62.29,49.99,62.29L49.99,62.29z"
              />
            </g>
            <path
              fill="#fff"
              d="M58.5,43.25c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75h0.001 c0.467,0,0.906,0.182,1.236,0.512c0.331,0.331,0.513,0.77,0.513,1.237C60.25,42.465,59.465,43.25,58.5,43.25z"
            />
            <path
              fill="#472b29"
              d="M58.5,40c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5S57,42.328,57,41.5 C57,40.672,57.672,40.001,58.5,40L58.5,40 M58.5,39.5L58.5,39.5c-1.103,0.001-2,0.898-2,2c0,1.103,0.897,2,2,2s2-0.897,2-2 S59.603,39.5,58.5,39.5L58.5,39.5z"
            />
            <path
              fill="#fff"
              d="M49.988,41.504c-4.695,0-8.501,3.806-8.501,8.501s3.806,8.499,8.501,8.499 c4.695,0,8.499-3.805,8.499-8.499S54.682,41.504,49.988,41.504L49.988,41.504z M49.988,44.505c3.037,0,5.5,2.462,5.5,5.5 c0,3.037-2.463,5.5-5.5,5.5c-3.038,0-5.5-2.463-5.5-5.5C44.488,46.967,46.95,44.505,49.988,44.505z"
            />
            <path
              fill="#472b29"
              d="M49.988,58.754c-4.825,0-8.751-3.925-8.751-8.75c0-4.825,3.926-8.75,8.751-8.75 c4.824,0,8.749,3.925,8.749,8.75C58.737,54.829,54.812,58.754,49.988,58.754z M49.988,41.754c-4.55,0-8.251,3.701-8.251,8.25 c0,4.549,3.701,8.25,8.251,8.25c4.549,0,8.249-3.701,8.249-8.25C58.237,45.455,54.537,41.754,49.988,41.754z M49.988,55.754 c-3.171,0-5.75-2.58-5.75-5.75s2.579-5.75,5.75-5.75s5.75,2.58,5.75,5.75S53.159,55.754,49.988,55.754z M49.988,44.754 c-2.895,0-5.25,2.355-5.25,5.25s2.355,5.25,5.25,5.25s5.25-2.355,5.25-5.25S52.883,44.754,49.988,44.754z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
