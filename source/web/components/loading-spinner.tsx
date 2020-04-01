import * as React from "react";

import "./loading-spinner.scss";

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <g filter="url(#filter0_d)">
            <path
              d="M146.133 24.6042C147.184 20.6359 152.816 20.6359 153.867 24.6042L155.295 29.9986C156.266 33.6645 161.317 34.048 162.83 30.5706L165.042 25.4847C166.68 21.7211 172.246 22.5703 172.687 26.6508L173.292 32.249C173.699 36.0177 178.632 37.159 180.653 33.9522L183.603 29.272C185.79 25.8016 191.161 27.4802 190.983 31.5786L190.736 37.2664C190.571 41.0502 195.269 42.9225 197.752 40.0627L201.384 35.8803C204.071 32.7851 209.121 35.2545 208.329 39.2762L207.214 44.9291C206.483 48.6408 210.836 51.1998 213.723 48.7555L217.972 45.1592C221.097 42.5133 225.708 45.7162 224.319 49.5686L222.342 55.0528C221.061 58.6069 224.967 61.7923 228.191 59.8224L232.979 56.8968C236.469 54.764 240.532 58.6258 238.579 62.2199L235.766 67.3959C233.965 70.7106 237.333 74.4475 240.816 72.9994L246.051 70.8234C249.824 69.255 253.243 73.6858 250.77 76.9381L247.175 81.6661C244.895 84.6647 247.646 88.8652 251.306 87.9736L256.878 86.6163C260.844 85.6503 263.539 90.5464 260.602 93.3808L256.306 97.5275C253.599 100.14 255.668 104.706 259.418 104.392L265.201 103.907C269.265 103.567 271.173 108.813 267.839 111.163L262.949 114.609C259.877 116.775 261.217 121.599 264.967 121.869L270.819 122.29C274.884 122.583 275.959 128.056 272.307 129.864L266.954 132.514C263.587 134.181 264.167 139.15 267.827 139.996L273.597 141.33C277.566 142.248 277.783 147.82 273.896 149.043L268.227 150.827C264.643 151.954 264.45 156.952 267.935 158.354L273.465 160.577C277.246 162.098 276.598 167.637 272.569 168.244L266.738 169.123C263.023 169.683 262.06 174.593 265.289 176.515L270.428 179.574C273.931 181.659 272.435 187.035 268.358 187.011L262.522 186.977C258.761 186.955 257.051 191.663 259.949 194.06L264.558 197.87C267.702 200.47 265.393 205.556 261.366 204.901L255.672 203.974C251.956 203.37 249.539 207.766 252.04 210.58L255.997 215.033C258.71 218.085 255.643 222.762 251.762 221.491L246.344 219.717C242.762 218.544 239.694 222.524 241.74 225.69L244.952 230.659C247.172 234.092 243.419 238.251 239.777 236.395L234.753 233.834C231.39 232.12 227.742 235.592 229.288 239.036L231.687 244.384C233.363 248.118 229.014 251.66 225.696 249.264L221.167 245.993C218.103 243.779 213.961 246.659 214.97 250.303L216.517 255.889C217.611 259.837 212.767 262.681 209.852 259.802L205.903 255.902C203.21 253.242 198.671 255.464 199.12 259.223L199.8 264.909C200.287 268.981 195.061 271.061 192.617 267.769L189.319 263.326C187.06 260.284 182.231 261.795 182.109 265.582L181.928 271.24C181.796 275.341 176.311 276.609 174.393 272.981L171.806 268.086C170.034 264.734 165.027 265.499 164.336 269.227L163.315 274.737C162.568 278.773 156.952 279.199 155.604 275.322L153.778 270.069C152.533 266.487 147.467 266.487 146.222 270.069L144.396 275.322C143.048 279.199 137.432 278.773 136.685 274.737L135.664 269.227C134.973 265.499 129.966 264.734 128.194 268.086L125.607 272.981C123.689 276.609 118.204 275.341 118.072 271.24L117.891 265.582C117.769 261.795 112.94 260.284 110.681 263.326L107.383 267.769C104.939 271.061 99.7128 268.981 100.2 264.909L100.88 259.223C101.329 255.464 96.7902 253.242 94.097 255.902L90.1482 259.802C87.2332 262.681 82.3887 259.837 83.4825 255.889L85.0298 250.303C86.039 246.659 81.8973 243.779 78.8327 245.993L74.3042 249.264C70.9865 251.66 66.6369 248.118 68.3125 244.384L70.7123 239.036C72.2579 235.592 68.6102 232.12 65.2466 233.834L60.223 236.395C56.5805 238.251 52.8281 234.092 55.0475 230.659L58.2599 225.69C60.3064 222.524 57.2382 218.544 53.6557 219.717L48.2375 221.491C44.3567 222.762 41.2899 218.085 44.0027 215.033L47.9604 210.58C50.4613 207.766 48.044 203.37 44.3282 203.974L38.6335 204.901C34.6068 205.556 32.2982 200.47 35.4422 197.87L40.0505 194.06C42.9486 191.663 41.2386 186.955 37.4782 186.977L31.6417 187.011C27.5651 187.035 26.0693 181.659 29.5723 179.574L34.7114 176.515C37.9403 174.593 36.9773 169.683 33.2616 169.123L27.431 168.244C23.4017 167.637 22.7542 162.098 26.5349 160.577L32.0652 158.354C35.5504 156.952 35.3566 151.954 31.7734 150.827L26.1041 149.043C22.2174 147.82 22.4336 142.248 26.4034 141.33L32.1729 139.996C35.8331 139.15 36.4132 134.181 33.0464 132.514L27.6933 129.864C24.0408 128.056 25.1156 122.583 29.1807 122.29L35.0333 121.869C38.7825 121.599 40.1229 116.775 37.0506 114.609L32.1605 111.163C28.8273 108.813 30.7352 103.567 34.799 103.907L40.5823 104.392C44.3316 104.706 46.4013 100.14 43.6941 97.5275L39.3976 93.3808C36.4607 90.5464 39.1564 85.6503 43.122 86.6163L48.6943 87.9736C52.3544 88.8652 55.1052 84.6647 52.825 81.6661L49.2298 76.9381C46.7567 73.6858 50.1764 69.255 53.9492 70.8234L59.1838 72.9994C62.6673 74.4475 66.035 70.7106 64.2338 67.3959L61.4211 62.2199C59.468 58.6258 63.531 54.7639 67.0214 56.8968L71.809 59.8224C75.0327 61.7923 78.9388 58.6069 77.6577 55.0528L75.6808 49.5686C74.2922 45.7162 78.9028 42.5133 82.0283 45.1592L86.2765 48.7555C89.164 51.1998 93.517 48.6408 92.7855 44.9291L91.6715 39.2762C90.8789 35.2545 95.9287 32.7851 98.6163 35.8803L102.248 40.0627C104.731 42.9225 109.429 41.0502 109.264 37.2664L109.017 31.5786C108.839 27.4802 114.21 25.8016 116.397 29.272L119.347 33.9522C121.368 37.159 126.301 36.0177 126.708 32.249L127.313 26.6508C127.754 22.5703 133.32 21.7211 134.958 25.4847L137.17 30.5706C138.683 34.048 143.734 33.6645 144.705 29.9986L146.133 24.6042Z"
              fill="#222222"
              className="gear"
            />
          </g>
          <path
            d="M234 149.5C234 196.168 196.168 234 149.5 234C102.832 234 65 196.168 65 149.5C65 102.832 102.832 65.0001 149.5 65.0001C196.168 65.0001 234 102.832 234 149.5Z"
            fill="white"
          />
          <g className="rays">
            <path
              d="M234 149.5C234 155.825 233.29 162.129 231.883 168.296L149.5 149.5H234Z"
              fill="#FF9999"
            />
            <path
              d="M225.635 186.157C222.891 191.856 219.516 197.229 215.573 202.174L149.5 149.5L225.635 186.157Z"
              fill="#FF9999"
            />
            <path
              d="M202.183 215.566C197.238 219.509 191.866 222.885 186.168 225.629L149.5 149.5L202.183 215.566Z"
              fill="#FF9999"
            />
            <path
              d="M168.307 231.88C162.141 233.288 155.836 233.999 149.512 234L149.5 149.5L168.307 231.88Z"
              fill="#FF9999"
            />
            <path
              d="M130.693 231.88C124.527 230.473 118.538 228.377 112.84 225.633L149.5 149.5L130.693 231.88Z"
              fill="#FF9999"
            />
            <path
              d="M96.8168 215.566C91.8718 211.623 87.3852 207.137 83.4413 202.192L149.5 149.5L96.8168 215.566Z"
              fill="#FF9999"
            />
            <path
              d="M73.3718 186.171C70.627 180.473 68.5307 174.484 67.1222 168.319L149.5 149.5L73.3718 186.171Z"
              fill="#FF9999"
            />
            <path
              d="M65 149.5C65 143.175 65.7101 136.871 67.1169 130.704L149.5 149.5L65 149.5Z"
              fill="#FF9999"
            />
            <path
              d="M73.3654 112.843C76.1091 107.144 79.484 101.771 83.4266 96.826L149.5 149.5L73.3654 112.843Z"
              fill="#FF9999"
            />
            <path
              d="M96.8052 83.4431C101.749 79.499 107.121 76.1225 112.819 73.3769L149.5 149.5L96.8052 83.4431Z"
              fill="#FF9999"
            />
            <path
              d="M130.693 67.1195C136.859 65.7118 143.164 65.0009 149.488 65L149.5 149.5L130.693 67.1195Z"
              fill="#FF9999"
            />
            <path
              d="M168.293 67.1162C174.459 68.5228 180.448 70.6173 186.147 73.3603L149.5 149.5L168.293 67.1162Z"
              fill="#FF9999"
            />
            <path
              d="M202.183 83.4339C207.128 87.3772 211.615 91.8631 215.559 96.8075L149.5 149.5L202.183 83.4339Z"
              fill="#FF9999"
            />
            <path
              d="M225.635 112.843C228.378 118.541 230.474 124.53 231.881 130.696L149.5 149.5L225.635 112.843Z"
              fill="#FF9999"
            />
          </g>
          <path
            d="M84.5197 200.337C99.6214 219.613 123.114 232 149.5 232C176.616 232 200.677 218.918 215.715 198.72C205.578 172.554 180.165 154 150.419 154C120.064 154 94.2217 173.322 84.5197 200.337Z"
            fill="#99B6FF"
          />
          <path
            d="M150.419 154C180.165 154 205.578 172.554 215.715 198.72C216.662 197.449 217.572 196.15 218.445 194.824C207.124 168.463 180.928 150 150.419 150C119.265 150 92.607 169.252 81.694 196.509C82.5998 197.813 83.5422 199.089 84.5197 200.337C94.2217 173.322 120.064 154 150.419 154Z"
            fill="#99B6FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M150.419 154C180.165 154 205.578 172.554 215.715 198.72C216.662 197.449 217.572 196.15 218.446 194.824C207.124 168.462 180.928 150 150.419 150C119.265 150 92.607 169.252 81.694 196.509C82.5998 197.813 83.5422 199.089 84.5198 200.337C94.2217 173.322 120.064 154 150.419 154Z"
            fill="#222222"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M125.753 170.111C129.457 171.52 134.017 172.619 139.126 173.284C139.782 173.369 140.447 173.447 141.12 173.518C144.101 173.832 147.246 174 150.5 174C153.754 174 156.899 173.832 159.88 173.518C160.553 173.447 161.218 173.369 161.874 173.284C166.983 172.619 171.543 171.52 175.247 170.111C176.589 169.601 177.81 169.053 178.898 168.476C179.521 168.146 180.101 167.806 180.635 167.458C181.354 166.989 181.991 166.506 182.542 166.011C184.215 164.507 185 162.981 185 161.5H187C187 163.747 185.799 165.772 183.879 167.498C183.272 168.044 182.585 168.568 181.825 169.069C181.287 169.424 180.712 169.768 180.104 170.099C178.855 170.779 177.465 171.407 175.958 171.981C172.122 173.439 167.455 174.565 162.264 175.25C161.609 175.336 160.945 175.416 160.273 175.488C157.161 175.822 153.883 176 150.5 176C147.117 176 143.839 175.822 140.727 175.488C140.055 175.416 139.391 175.336 138.736 175.25C133.545 174.565 128.878 173.439 125.042 171.981C123.535 171.407 122.145 170.779 120.896 170.099C120.288 169.768 119.713 169.424 119.175 169.069C118.415 168.568 117.728 168.044 117.121 167.498C115.201 165.772 114 163.747 114 161.5H116C116 162.981 116.785 164.507 118.458 166.011C119.009 166.506 119.646 166.989 120.365 167.458C120.899 167.806 121.479 168.146 122.102 168.476C123.19 169.053 124.411 169.601 125.753 170.111Z"
            fill="#222222"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.372 197.069C107.627 197.124 107.885 197.179 108.144 197.234C115.63 198.808 124.965 199.976 135.384 200.567C136.046 200.604 136.712 200.639 137.383 200.672C141.762 200.887 146.319 201 151 201C155.327 201 159.549 200.903 163.621 200.719C164.292 200.689 164.958 200.656 165.62 200.621C176.005 200.072 185.349 198.953 192.912 197.428C193.495 197.311 194.067 197.191 194.628 197.069C194.711 197.051 194.793 197.033 194.875 197.015C200.333 195.813 204.69 194.4 207.67 192.866C209.184 192.086 210.293 191.301 211.012 190.536C211.726 189.776 212 189.099 212 188.5H214C214 189.765 213.407 190.908 212.469 191.906C211.536 192.899 210.209 193.808 208.585 194.644C205.406 196.281 200.899 197.73 195.417 198.943C195.297 198.97 195.175 198.997 195.053 199.023C194.53 199.137 193.998 199.249 193.458 199.358C185.77 200.918 176.293 202.058 165.785 202.615C165.123 202.65 164.457 202.683 163.786 202.714C159.658 202.901 155.381 203 151 203C146.266 203 141.653 202.885 137.217 202.666C136.547 202.633 135.881 202.598 135.219 202.56C124.676 201.96 115.208 200.772 107.596 199.162C107.378 199.116 107.162 199.07 106.947 199.023C106.505 198.927 106.07 198.829 105.641 198.73C100.584 197.561 96.4099 196.186 93.4146 194.644C91.7912 193.808 90.4641 192.899 89.5309 191.906C88.5932 190.908 88 189.765 88 188.5H90C90 189.099 90.2742 189.776 90.9883 190.536C91.7069 191.301 92.816 192.086 94.33 192.866C97.1376 194.311 101.166 195.648 106.186 196.803C106.576 196.893 106.971 196.981 107.372 197.069Z"
            fill="#222222"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M101.803 219.261C102.424 219.687 103.051 220.104 103.685 220.514C104.429 212.995 105.762 205.831 107.596 199.162C115.208 200.772 124.676 201.96 135.219 202.56C134.595 210.387 134.193 218.801 134.054 227.595C126.414 227.211 119.298 226.567 112.959 225.712C115.069 226.726 117.228 227.654 119.431 228.493C124.018 228.968 128.909 229.34 134.027 229.596C134.016 230.587 134.009 231.583 134.004 232.582C134.668 232.705 135.334 232.821 136.003 232.928C136.007 231.843 136.015 230.764 136.026 229.69C140.692 229.893 145.534 230 150.5 230C155.466 230 160.308 229.893 164.974 229.69C164.984 230.65 164.992 231.614 164.996 232.582C165.665 232.458 166.331 232.327 166.994 232.187C166.989 231.32 166.982 230.457 166.973 229.596C171.098 229.39 175.075 229.108 178.865 228.758C181.055 227.946 183.203 227.046 185.303 226.062C179.677 226.744 173.504 227.266 166.946 227.595C166.807 218.822 166.407 210.427 165.785 202.615C176.293 202.058 185.77 200.918 193.458 199.358C195.163 205.601 196.43 212.277 197.187 219.268C197.814 218.838 198.436 218.4 199.051 217.954C198.278 211.303 197.047 204.933 195.417 198.943C200.899 197.73 205.406 196.281 208.585 194.644C210.209 193.808 211.536 192.899 212.469 191.906C213.407 190.908 214 189.765 214 188.5H212C212 189.099 211.726 189.776 211.012 190.536C210.293 191.301 209.184 192.086 207.67 192.866C204.69 194.4 200.333 195.813 194.875 197.015C191.727 186.177 187.257 176.657 181.825 169.069C182.585 168.568 183.272 168.044 183.879 167.498C185.799 165.772 187 163.747 187 161.5H185C185 162.981 184.215 164.507 182.542 166.011C181.991 166.506 181.354 166.989 180.635 167.458C172.289 156.509 161.84 150 150.5 150C139.16 150 128.711 156.509 120.365 167.458C119.646 166.989 119.009 166.506 118.458 166.011C116.785 164.507 116 162.981 116 161.5H114C114 163.747 115.201 165.772 117.121 167.498C117.728 168.044 118.415 168.568 119.175 169.069C113.778 176.607 109.331 186.053 106.186 196.803C101.166 195.648 97.1376 194.311 94.33 192.866C92.816 192.086 91.7069 191.301 90.9883 190.536C90.2742 189.776 90 189.099 90 188.5H88C88 189.765 88.5932 190.908 89.5309 191.906C90.4641 192.899 91.7912 193.808 93.4146 194.644C96.4099 196.186 100.584 197.561 105.641 198.73C103.875 205.172 102.571 212.057 101.803 219.261ZM135.384 200.567C136.197 191.091 137.339 182.525 138.736 175.25C133.545 174.565 128.878 173.439 125.042 171.981C123.535 171.407 122.145 170.779 120.896 170.099C119.621 171.871 118.395 173.761 117.224 175.76C113.575 181.99 110.495 189.234 108.144 197.234C115.63 198.808 124.965 199.976 135.384 200.567ZM139.126 173.284C134.017 172.619 129.457 171.52 125.753 170.111C124.411 169.601 123.19 169.053 122.102 168.476C129.181 159.26 137.657 153.531 146.688 152.266C143.8 155.764 141.205 163.15 139.126 173.284ZM159.88 173.518C158.472 166.695 156.848 161.25 155.107 157.479C154.166 155.441 153.24 154 152.378 153.097C151.518 152.196 150.894 152 150.5 152C150.106 152 149.482 152.196 148.622 153.097C147.76 154 146.834 155.441 145.893 157.479C144.152 161.25 142.528 166.695 141.12 173.518C144.101 173.832 147.246 174 150.5 174C153.754 174 156.899 173.832 159.88 173.518ZM160.273 175.488C161.667 182.713 162.809 191.252 163.621 200.719C159.549 200.903 155.327 201 151 201C146.319 201 141.762 200.887 137.383 200.672C138.194 191.224 139.335 182.701 140.727 175.488C143.839 175.822 147.117 176 150.5 176C153.883 176 157.161 175.822 160.273 175.488ZM162.264 175.25C163.664 182.539 164.808 191.124 165.62 200.621C176.005 200.072 185.349 198.953 192.912 197.428C190.555 189.351 187.455 182.04 183.776 175.76C182.605 173.761 181.379 171.871 180.104 170.099C178.855 170.779 177.465 171.407 175.958 171.981C172.122 173.439 167.455 174.565 162.264 175.25ZM178.898 168.476C177.81 169.053 176.589 169.601 175.247 170.111C171.543 171.52 166.983 172.619 161.874 173.284C159.795 163.15 157.2 155.764 154.312 152.266C163.343 153.531 171.819 159.26 178.898 168.476ZM137.217 202.666C141.653 202.885 146.266 203 151 203C155.381 203 159.658 202.901 163.786 202.714C164.409 210.512 164.81 218.906 164.947 227.689C160.295 227.893 155.461 228 150.5 228C145.539 228 140.705 227.893 136.053 227.689C136.191 218.889 136.593 210.478 137.217 202.666Z"
            fill="#222222"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M197.187 219.268C197.814 218.838 198.436 218.4 199.051 217.954C198.278 211.303 197.047 204.933 195.417 198.943C195.241 198.296 195.06 197.653 194.875 197.015C191.727 186.177 187.257 176.657 181.825 169.069C181.433 168.522 181.037 167.985 180.635 167.458C172.289 156.509 161.84 150 150.5 150C139.16 150 128.711 156.509 120.365 167.458C119.963 167.985 119.567 168.522 119.175 169.069C113.778 176.607 109.331 186.053 106.186 196.803C106 197.441 105.818 198.083 105.641 198.73C103.875 205.172 102.571 212.057 101.803 219.261C102.424 219.687 103.051 220.104 103.685 220.514C104.429 212.995 105.762 205.831 107.596 199.162C107.774 198.515 107.957 197.872 108.144 197.234C110.495 189.234 113.575 181.99 117.224 175.76C118.395 173.761 119.621 171.871 120.896 170.099C121.294 169.547 121.696 169.006 122.102 168.476C129.181 159.26 137.657 153.531 146.688 152.266C143.8 155.764 141.205 163.15 139.126 173.284C138.994 173.928 138.864 174.584 138.736 175.25C137.339 182.525 136.197 191.091 135.384 200.567C135.328 201.227 135.273 201.891 135.219 202.56C134.595 210.387 134.193 218.801 134.054 227.595C126.414 227.211 119.298 226.567 112.959 225.712C115.069 226.726 117.228 227.654 119.431 228.493C124.018 228.968 128.909 229.34 134.027 229.596C134.016 230.587 134.009 231.583 134.004 232.582C134.668 232.705 135.334 232.821 136.003 232.928C136.007 231.843 136.015 230.764 136.026 229.69C140.692 229.893 145.534 230 150.5 230C155.466 230 160.308 229.893 164.974 229.69C164.984 230.65 164.992 231.614 164.996 232.582C165.665 232.458 166.331 232.327 166.994 232.187C166.989 231.32 166.982 230.457 166.973 229.596C171.098 229.39 175.075 229.108 178.865 228.758C181.055 227.946 183.203 227.046 185.303 226.062C179.677 226.744 173.504 227.266 166.946 227.595C166.807 218.822 166.407 210.427 165.785 202.615C165.732 201.946 165.677 201.281 165.62 200.621C164.808 191.124 163.664 182.539 162.264 175.25C162.136 174.584 162.006 173.928 161.874 173.284C159.795 163.15 157.2 155.764 154.312 152.266C163.343 153.531 171.819 159.26 178.898 168.476C179.304 169.006 179.706 169.547 180.104 170.099C181.379 171.871 182.605 173.761 183.776 175.76C187.455 182.04 190.555 189.351 192.912 197.428C193.099 198.067 193.281 198.71 193.458 199.358C195.163 205.601 196.43 212.277 197.187 219.268ZM164.947 227.689C164.81 218.906 164.409 210.512 163.786 202.714C163.733 202.044 163.678 201.379 163.621 200.719C162.809 191.252 161.667 182.713 160.273 175.488L160.241 175.321L160.204 175.133C160.098 174.586 159.99 174.048 159.88 173.518C158.472 166.695 156.848 161.25 155.107 157.479C154.166 155.441 153.24 154 152.378 153.097C151.518 152.196 150.894 152 150.5 152C150.106 152 149.482 152.196 148.622 153.097C147.76 154 146.834 155.441 145.893 157.479C144.152 161.25 142.528 166.695 141.12 173.518C141.01 174.048 140.902 174.586 140.796 175.133L140.753 175.353L140.727 175.488C139.335 182.701 138.194 191.224 137.383 200.672C137.326 201.332 137.271 201.997 137.217 202.666C136.593 210.478 136.191 218.889 136.053 227.689C140.705 227.893 145.539 228 150.5 228C155.461 228 160.295 227.893 164.947 227.689Z"
            fill="#222222"
          />
          <path
            d="M151.902 114.382L150 108.528L148.098 114.382L140.689 137.184L116.713 137.184H110.558L115.537 140.802L134.934 154.895L127.525 177.698L125.623 183.552L130.603 179.934L150 165.841L169.397 179.934L174.377 183.552L172.475 177.698L165.066 154.895L184.463 140.802L189.442 137.184H183.287L159.311 137.184L151.902 114.382Z"
            fill="#FFCC33"
            stroke="#222222"
            stroke-width="4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63 149.5C63 101.727 101.727 63.0001 149.5 63.0001C197.273 63.0001 236 101.727 236 149.5C236 197.273 197.273 236 149.5 236C101.727 236 63 197.273 63 149.5ZM67 149.5C67 103.937 103.937 67.0001 149.5 67.0001C195.063 67.0001 232 103.937 232 149.5C232 166.241 227.014 181.817 218.446 194.824C217.572 196.15 216.662 197.449 215.715 198.72C200.677 218.918 176.616 232 149.5 232C123.114 232 99.6215 219.613 84.5198 200.337C83.5422 199.089 82.5998 197.813 81.694 196.509C72.4299 183.171 67 166.97 67 149.5Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="19.3044"
            y="21.628"
            width="261.391"
            height="264.381"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clip0">
            <rect width="300" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};