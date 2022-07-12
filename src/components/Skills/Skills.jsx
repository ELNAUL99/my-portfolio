import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills bg-grey" id="skills">
      <div className="section-center">
        <div className="section-title skills-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Skills
          </h2>
          <div className="underline"></div>
        </div>

        <div className="skills-center">
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>
            <p>HTML</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </svg>
            <p>CSS</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>
            <p>Javascript</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
            <p>React</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg viewBox="0 0 128 128">
              <path d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
            </svg>
            <p>Java</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg viewBox="0 0 128 128">
              <path d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
            </svg>
            <p>C#</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg viewBox="0 0 128 128">
              <path d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
            </svg>
            <p>MySQL</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 170">
              <path fill="#002B64" d="M250.383.004c-3.957.127-2.706 1.267-11.255 3.37c-8.632 2.125-19.178 1.474-28.474 5.372c-27.75 11.639-33.319 51.417-58.547 65.666c-18.858 10.652-37.883 11.501-54.988 16.861c-11.241 3.525-23.538 10.754-33.723 19.53c-7.905 6.816-8.111 12.808-16.371 21.355c-8.836 9.143-35.115.155-47.025 14.148c3.837 3.879 5.519 4.966 13.08 3.96c-1.566 2.966-10.793 5.466-8.987 9.831c1.9 4.593 24.21 7.706 44.489-4.538c9.444-5.702 16.967-13.92 31.676-15.882c19.034-2.537 40.96 1.627 62.996 4.805c-3.268 9.742-9.827 16.22-15.082 23.979c-1.627 1.753 3.268 1.949 8.853.89c10.047-2.484 17.287-4.485 24.87-8.898c9.314-5.423 10.726-19.325 22.155-22.333c6.368 9.787 23.687 12.1 34.434 4.27c-9.43-2.669-12.036-22.741-8.853-31.586c3.015-8.373 5.994-21.766 9.031-32.833c3.26-11.886 4.463-26.867 8.408-32.922c5.937-9.109 12.496-12.237 18.19-17.374c5.695-5.136 10.907-10.136 10.736-21.89C255.94 2 253.983-.11 250.383.005Z"/><path fill="#C49A6C" d="M241.905 6.968c.949 3.232 2.432 4.716 8.845 5.309c-.937 8.13-6.36 12.578-12.441 16.844c-5.352 3.753-11.214 7.367-14.981 13.23c-3.86 6.005-6.31 26.559-12.294 46.857c-5.173 17.539-12.984 34.88-26.625 42.479c-1.425-3.587.182-10.208-2.653-12.384c-1.834 5.231-3.907 10.222-6.336 14.86c-8.004 15.3-19.855 26.754-39.66 30.252c9.397-12.716 18.382-25.847 18.577-47.763c-6.613 1.43-6.473 17.052-13.268 21.228c-4.356.474-8.77.471-13.21.204c-18.24-1.093-36.952-6.575-54.015-1.1c-11.618 3.729-21.12 12.525-30.958 16.792c-11.563 5.015-20.32 7.077-34.718 5.015c-1.829-2.463 10.538-5.64 9.798-10.988c-5.635-.623-8.907.742-13.806-1.483c.541-.997 1.336-1.827 2.337-2.518c8.978-6.215 34.48-1.468 41.304-8.17c4.213-4.133 6.977-8.46 9.839-12.665c2.775-4.081 5.643-8.048 10.014-11.624a76.27 76.27 0 0 1 5.23-3.898c7.448-5.097 16.662-9.72 25.73-12.907c12.351-4.342 24.868-4.7 38.034-9.73c8.133-3.109 16.978-6.948 24.187-12.32a48.283 48.283 0 0 0 4.829-4.099c20.586-20.068 24.667-55.468 56.785-58.767c3.884-.398 7.063-.27 9.958-.357c3.335-.1 6.288-.487 9.498-2.297Zm-39.154 113.3c.383 6.134 3.945 18.306 7.089 21.264c-6.158 1.497-16.765-.977-19.486-5.32c1.398-6.271 8.674-12.004 12.397-15.945Z"/><path fill="#002B64" d="M244.219 13.837c-1.238 2.597-3.608 5.944-3.608 12.554c-.01 1.135-.862 1.912-.876.163c.064-6.46 1.774-9.253 3.59-12.923c.844-1.504 1.353-.884.894.206Zm-1.247-.978c-1.46 2.478-4.976 6.996-5.558 13.581c-.107 1.13-1.025 1.828-.886.083c.634-6.428 3.444-10.451 5.577-13.949c.967-1.422 1.422-.76.867.285Zm-1.136-1.296c-1.664 2.345-7.076 7.772-8.208 14.286c-.204 1.114-1.177 1.736-.89.009c1.17-6.354 5.836-11.348 8.255-14.65c1.084-1.34 1.48-.64.843.355Zm-1.014-1.446l-.548.583c-2.42 2.594-8.042 8.922-9.915 14.715c-.36 1.075-1.411 1.554-.884-.117c2.052-6.126 7.703-12.724 10.562-15.653c1.263-1.172 1.556-.424.785.472Zm-29.05 13.115c1.254-5.386 5.443-7.84 12.674-7.242c1.745 8.04-8.02 11.283-12.674 7.242Z"/>  
            </svg>
            <p>MariaDB</p>
          </div>
          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm1.988 9.065l.77-3.271H6.564l.362-1.39h2.868l-1.132 4.67a3.071 3.071 0 0 0-.106.72c0 .298.141.386.362.437c.135.032 1.208.01 1.791-1.34l.744-3.097h-1.208l.363-1.39h2.58l-.331 1.578c.452-.88 1.358-1.715 2.248-1.715c.95 0 1.736.704 1.736 2.055c0 .345-.046.721-.166 1.145l-.483 1.805a2.159 2.159 0 0 0-.076.487c0 .314.121.47.347.47c.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025c-1.041 0-1.539-.643-1.539-1.523c0-.25.03-.518.106-.785l.498-1.853a1.96 1.96 0 0 0 .075-.565c0-.596-.347-.958-.905-.958c-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375c-1.026 0-1.509-.615-1.509-1.542c0-.235.03-.523.09-.79zm1.637-5.44a1.125 1.125 0 1 1 0-2.25a1.125 1.125 0 0 1 0 2.25z"/>  
            </svg>
            <p>InVision</p>
          </div>

          <div className="skills-icon animate" data-animate="slideInLeft 1s">
            <svg viewBox="0 0 128 128">
              <path d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"></path>
            </svg>
            <p>WPF</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
