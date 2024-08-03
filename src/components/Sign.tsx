import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
interface LogoProps {
  isDark: boolean
}

const Logo: React.FC = () => {
  const pathData =
    'M 107 187.601 Q 101 187.601 97.1 183.201 Q 93.532 179.175 93.898 168.621 A 65.668 65.668 0 0 1 94 166.601 A 74.145 74.145 0 0 1 95.193 157.557 Q 97.097 147.504 101.8 134.201 Q 108.8 114.401 120 87.601 Q 123.6 79.001 127.3 68.401 Q 131 57.801 133.6 47.101 A 101.761 101.761 0 0 0 135.378 38.14 Q 136.046 33.67 136.171 29.638 A 59.141 59.141 0 0 0 136.2 27.801 A 40.759 40.759 0 0 0 135.913 22.838 Q 135.59 20.208 134.904 17.941 A 24.229 24.229 0 0 0 134.7 17.301 A 12.83 12.83 0 0 0 132.708 13.481 A 11.254 11.254 0 0 0 129.4 10.601 Q 125 7.801 120 6.601 A 44.194 44.194 0 0 0 111.49 5.443 A 50.735 50.735 0 0 0 109.4 5.401 A 61.731 61.731 0 0 0 93.98 7.446 A 81.749 81.749 0 0 0 82.9 11.201 A 113.046 113.046 0 0 0 60.973 23.464 A 130.01 130.01 0 0 0 56.1 27.101 Q 43.2 37.201 33.1 50.001 A 104.917 104.917 0 0 0 21.74 67.652 A 90.901 90.901 0 0 0 17.8 76.601 A 114.698 114.698 0 0 0 15.064 85.031 A 88.246 88.246 0 0 0 13.4 92.001 A 83.735 83.735 0 0 0 12.443 98.033 Q 12.07 101.159 12.011 103.97 A 49.61 49.61 0 0 0 12 105.001 A 48.983 48.983 0 0 0 12.577 112.73 Q 13.538 118.738 16.1 123.301 Q 20.2 130.601 26.9 134.101 Q 33.6 137.601 41.4 137.601 Q 48.8 137.601 55.4 135.001 A 37.286 37.286 0 0 0 67.739 127.315 A 45.64 45.64 0 0 0 70.8 124.201 Q 77.6 116.601 81.6 107.301 Q 85.081 99.209 85.533 92.252 A 31.632 31.632 0 0 0 85.6 90.201 A 21.875 21.875 0 0 0 84.977 84.855 A 16.541 16.541 0 0 0 82.1 78.801 A 10.849 10.849 0 0 0 76.739 75.081 Q 74.884 74.462 72.603 74.278 A 24.945 24.945 0 0 0 70.6 74.201 L 68.3 74.201 A 7.262 7.262 0 0 0 67.28 74.277 Q 66.761 74.351 66.188 74.496 A 13.241 13.241 0 0 0 65.8 74.601 Q 65.172 74.758 64.667 74.792 A 4.008 4.008 0 0 1 64.4 74.801 L 63.4 74.801 A 6.114 6.114 0 0 1 62.812 74.775 Q 62.237 74.719 61.935 74.542 A 0.603 0.603 0 0 1 61.6 74.001 A 1.063 1.063 0 0 1 61.884 73.33 Q 62.639 72.418 65.4 71.401 Q 71.6 69.401 77 69.401 Q 83.926 69.401 88.247 72.387 A 13.815 13.815 0 0 1 91 74.901 A 19.462 19.462 0 0 1 95.236 84.305 A 26.718 26.718 0 0 1 95.6 88.801 Q 95.6 97.201 91 106.901 A 60.435 60.435 0 0 1 83.571 118.674 A 76.954 76.954 0 0 1 77.5 125.401 A 63.97 63.97 0 0 1 64.066 135.468 A 81.259 81.259 0 0 1 55.2 139.801 Q 48 142.801 40.4 142.801 Q 30 142.801 20.8 137.401 A 40.878 40.878 0 0 1 7.303 124.429 A 49.135 49.135 0 0 1 5.8 122.001 A 42.434 42.434 0 0 1 0.686 107.325 A 56.021 56.021 0 0 1 0 98.401 A 60.373 60.373 0 0 1 0.757 89.042 A 71.689 71.689 0 0 1 1.6 84.601 A 78.74 78.74 0 0 1 3.97 76.248 A 100.862 100.862 0 0 1 6.6 69.401 Q 13.2 54.001 24.6 41.301 Q 36 28.601 50.1 19.301 A 128.54 128.54 0 0 1 72.559 7.394 A 115.453 115.453 0 0 1 79 5.001 Q 93.8 0.001 107.2 0.001 A 57.307 57.307 0 0 1 120.109 1.405 A 48.106 48.106 0 0 1 128.6 4.201 A 35.868 35.868 0 0 1 135.92 8.39 A 25.489 25.489 0 0 1 143.5 17.301 A 40.168 40.168 0 0 1 147.595 31.864 A 49.109 49.109 0 0 1 147.8 36.401 A 78.458 78.458 0 0 1 146.425 50.705 A 100.962 100.962 0 0 1 143.9 61.101 Q 140 74.201 134.4 86.801 Q 128.2 101.001 122.2 116.401 Q 116.2 131.801 111.8 145.601 A 321.113 321.113 0 0 0 109.083 154.545 Q 107.932 158.554 107.061 162.068 A 135.527 135.527 0 0 0 105.6 168.601 A 79.431 79.431 0 0 0 105.289 170.43 Q 105.157 171.266 105.061 172.013 A 44.526 44.526 0 0 0 105 172.501 Q 104.8 174.201 104.8 175.401 A 15.95 15.95 0 0 0 104.962 177.78 Q 105.428 180.855 107.24 181.884 A 4.304 4.304 0 0 0 109.4 182.401 Q 112.173 182.401 115.926 180.047 A 26.87 26.87 0 0 0 116 180.001 A 48.778 48.778 0 0 0 122.514 175.309 Q 125.541 172.751 128.601 169.475 A 92.445 92.445 0 0 0 131 166.801 Q 138.6 158.001 146.1 146.701 Q 153.6 135.401 160.6 123.501 Q 167.6 111.601 174 101.001 Q 178.9 92.885 183.097 86.645 A 216.213 216.213 0 0 1 185.6 83.001 A 47.781 47.781 0 0 1 187.561 80.475 Q 188.618 79.21 189.628 78.216 A 19.619 19.619 0 0 1 191.6 76.501 A 16.196 16.196 0 0 1 193.092 75.497 Q 194.704 74.548 196.004 74.421 A 4.053 4.053 0 0 1 196.4 74.401 A 3.527 3.527 0 0 1 199.764 76.363 Q 200.544 77.838 200.597 80.421 A 18.639 18.639 0 0 1 200.6 80.801 Q 200.6 83.562 199.65 87.167 A 46.26 46.26 0 0 1 198.8 90.001 Q 196.2 97.601 191.8 107.301 Q 187.4 117.001 183.6 126.901 Q 179.8 136.801 178.6 145.401 Q 178.428 147.291 178.33 148.813 A 87.553 87.553 0 0 0 178.3 149.301 A 59.468 59.468 0 0 0 178.2 152.688 A 64.669 64.669 0 0 0 178.2 152.801 A 40.621 40.621 0 0 0 178.514 158.047 Q 179.264 163.78 181.801 167.001 A 10.995 10.995 0 0 0 182.4 167.701 A 13.966 13.966 0 0 0 191.741 172.13 A 19.171 19.171 0 0 0 193.4 172.201 Q 199.509 172.201 206.906 169.134 A 61.947 61.947 0 0 0 211.1 167.201 A 96.891 96.891 0 0 0 222.892 160.1 A 123.262 123.262 0 0 0 231 153.901 Q 241 145.601 249.1 135.601 A 94.275 94.275 0 0 0 256.559 125.054 A 72.802 72.802 0 0 0 261.4 115.601 A 140.743 140.743 0 0 0 266.588 101.09 A 119.346 119.346 0 0 0 268.4 94.201 Q 270.8 83.801 270.8 75.201 Q 270.8 63.706 266.638 55.75 A 29.242 29.242 0 0 0 264.8 52.701 A 19.412 19.412 0 0 0 252.148 44.579 A 30.895 30.895 0 0 0 246 44.001 Q 245 44.001 243.8 44.101 Q 242.6 44.201 241.2 44.401 Q 237.508 45.324 235.354 45.537 A 11.853 11.853 0 0 1 234.2 45.601 A 8.507 8.507 0 0 1 233.35 45.562 Q 231.6 45.385 231.6 44.401 A 1.732 1.732 0 0 1 231.944 43.429 Q 232.772 42.215 235.6 40.801 A 13.079 13.079 0 0 1 241.519 39.372 A 13.852 13.852 0 0 1 244 39.601 A 31.095 31.095 0 0 1 246.583 39.492 A 29.69 29.69 0 0 1 262.1 43.901 A 34.618 34.618 0 0 1 272.614 53.815 A 44.566 44.566 0 0 1 275.8 59.101 A 44.881 44.881 0 0 1 279.853 71.021 Q 281 76.837 281 83.601 Q 281 91.001 279.4 99.601 Q 277.8 108.201 274 117.601 Q 269 130.201 260 141.001 Q 251 151.801 239.9 160.001 A 105.074 105.074 0 0 1 225.869 168.805 A 89.197 89.197 0 0 1 217.3 172.701 A 70.858 70.858 0 0 1 207.017 175.893 A 51.202 51.202 0 0 1 195.8 177.201 A 30.166 30.166 0 0 1 185.964 175.654 A 25.951 25.951 0 0 1 176.7 170.101 A 21.351 21.351 0 0 1 171.238 161.707 Q 169.944 158.245 169.399 153.937 A 53.689 53.689 0 0 1 169 147.201 Q 169 140.601 170.2 133.801 A 121.279 121.279 0 0 1 171.413 127.777 Q 172.15 124.563 173 121.801 Q 169.6 127.401 164 135.701 A 268.203 268.203 0 0 1 156.414 146.349 A 328.231 328.231 0 0 1 151.3 153.001 Q 144.2 162.001 136.6 169.901 Q 129 177.801 121.4 182.701 Q 113.8 187.601 107 187.601 Z M 449.6 187.601 Q 443.6 187.601 439.7 183.201 Q 436.132 179.175 436.498 168.621 A 65.668 65.668 0 0 1 436.6 166.601 A 74.145 74.145 0 0 1 437.793 157.557 Q 439.697 147.504 444.4 134.201 Q 451.4 114.401 462.6 87.601 Q 466.2 79.001 469.9 68.401 Q 473.6 57.801 476.2 47.101 A 101.761 101.761 0 0 0 477.978 38.14 Q 478.646 33.67 478.771 29.638 A 59.141 59.141 0 0 0 478.8 27.801 A 40.759 40.759 0 0 0 478.513 22.838 Q 478.19 20.208 477.504 17.941 A 24.229 24.229 0 0 0 477.3 17.301 A 12.83 12.83 0 0 0 475.308 13.481 A 11.254 11.254 0 0 0 472 10.601 Q 467.6 7.801 462.6 6.601 A 44.194 44.194 0 0 0 454.09 5.443 A 50.735 50.735 0 0 0 452 5.401 A 61.731 61.731 0 0 0 436.58 7.446 A 81.749 81.749 0 0 0 425.5 11.201 A 113.046 113.046 0 0 0 403.573 23.464 A 130.01 130.01 0 0 0 398.7 27.101 Q 385.8 37.201 375.7 50.001 A 104.917 104.917 0 0 0 364.34 67.652 A 90.901 90.901 0 0 0 360.4 76.601 A 114.698 114.698 0 0 0 357.664 85.031 A 88.246 88.246 0 0 0 356 92.001 A 83.735 83.735 0 0 0 355.043 98.033 Q 354.67 101.159 354.611 103.97 A 49.61 49.61 0 0 0 354.6 105.001 A 48.983 48.983 0 0 0 355.177 112.73 Q 356.138 118.738 358.7 123.301 Q 362.8 130.601 369.5 134.101 Q 376.2 137.601 384 137.601 Q 391.4 137.601 398 135.001 A 37.286 37.286 0 0 0 410.339 127.315 A 45.64 45.64 0 0 0 413.4 124.201 Q 420.2 116.601 424.2 107.301 Q 427.681 99.209 428.133 92.252 A 31.632 31.632 0 0 0 428.2 90.201 A 21.875 21.875 0 0 0 427.577 84.855 A 16.541 16.541 0 0 0 424.7 78.801 A 10.849 10.849 0 0 0 419.339 75.081 Q 417.484 74.462 415.203 74.278 A 24.945 24.945 0 0 0 413.2 74.201 L 410.9 74.201 A 7.262 7.262 0 0 0 409.88 74.277 Q 409.361 74.351 408.788 74.496 A 13.241 13.241 0 0 0 408.4 74.601 Q 407.772 74.758 407.267 74.792 A 4.008 4.008 0 0 1 407 74.801 L 406 74.801 A 6.114 6.114 0 0 1 405.412 74.775 Q 404.837 74.719 404.535 74.542 A 0.603 0.603 0 0 1 404.2 74.001 A 1.063 1.063 0 0 1 404.484 73.33 Q 405.239 72.418 408 71.401 Q 414.2 69.401 419.6 69.401 Q 426.526 69.401 430.847 72.387 A 13.815 13.815 0 0 1 433.6 74.901 A 19.462 19.462 0 0 1 437.836 84.305 A 26.718 26.718 0 0 1 438.2 88.801 Q 438.2 97.201 433.6 106.901 A 60.435 60.435 0 0 1 426.171 118.674 A 76.954 76.954 0 0 1 420.1 125.401 A 63.97 63.97 0 0 1 406.666 135.468 A 81.259 81.259 0 0 1 397.8 139.801 Q 390.6 142.801 383 142.801 Q 372.6 142.801 363.4 137.401 A 40.878 40.878 0 0 1 349.903 124.429 A 49.135 49.135 0 0 1 348.4 122.001 A 42.434 42.434 0 0 1 343.286 107.325 A 56.021 56.021 0 0 1 342.6 98.401 A 60.373 60.373 0 0 1 343.357 89.042 A 71.689 71.689 0 0 1 344.2 84.601 A 78.74 78.74 0 0 1 346.57 76.248 A 100.862 100.862 0 0 1 349.2 69.401 Q 355.8 54.001 367.2 41.301 Q 378.6 28.601 392.7 19.301 A 128.54 128.54 0 0 1 415.159 7.394 A 115.453 115.453 0 0 1 421.6 5.001 Q 436.4 0.001 449.8 0.001 A 57.307 57.307 0 0 1 462.709 1.405 A 48.106 48.106 0 0 1 471.2 4.201 A 35.868 35.868 0 0 1 478.52 8.39 A 25.489 25.489 0 0 1 486.1 17.301 A 40.168 40.168 0 0 1 490.195 31.864 A 49.109 49.109 0 0 1 490.4 36.401 A 78.458 78.458 0 0 1 489.025 50.705 A 100.962 100.962 0 0 1 486.5 61.101 Q 482.6 74.201 477 86.801 Q 470.8 101.001 464.8 116.401 Q 458.8 131.801 454.4 145.601 A 321.113 321.113 0 0 0 451.683 154.545 Q 450.532 158.554 449.661 162.068 A 135.527 135.527 0 0 0 448.2 168.601 A 79.431 79.431 0 0 0 447.889 170.43 Q 447.757 171.266 447.661 172.013 A 44.526 44.526 0 0 0 447.6 172.501 Q 447.4 174.201 447.4 175.401 A 15.95 15.95 0 0 0 447.562 177.78 Q 448.028 180.855 449.84 181.884 A 4.304 4.304 0 0 0 452 182.401 Q 454.773 182.401 458.526 180.047 A 26.87 26.87 0 0 0 458.6 180.001 A 48.778 48.778 0 0 0 465.114 175.309 Q 468.141 172.751 471.201 169.475 A 92.445 92.445 0 0 0 473.6 166.801 Q 481.2 158.001 488.7 146.701 Q 496.2 135.401 503.2 123.501 Q 510.2 111.601 516.6 101.001 Q 521.5 92.885 525.697 86.645 A 216.213 216.213 0 0 1 528.2 83.001 A 47.781 47.781 0 0 1 530.161 80.475 Q 531.218 79.21 532.228 78.216 A 19.619 19.619 0 0 1 534.2 76.501 A 16.196 16.196 0 0 1 535.692 75.497 Q 537.304 74.548 538.604 74.421 A 4.053 4.053 0 0 1 539 74.401 A 3.527 3.527 0 0 1 542.364 76.363 Q 543.144 77.838 543.197 80.421 A 18.639 18.639 0 0 1 543.2 80.801 Q 543.2 83.562 542.25 87.167 A 46.26 46.26 0 0 1 541.4 90.001 Q 538.8 97.601 534.4 107.301 Q 530 117.001 526.2 126.901 Q 522.4 136.801 521.2 145.401 Q 521.028 147.291 520.93 148.813 A 87.553 87.553 0 0 0 520.9 149.301 A 59.468 59.468 0 0 0 520.8 152.688 A 64.669 64.669 0 0 0 520.8 152.801 A 40.621 40.621 0 0 0 521.114 158.047 Q 521.864 163.78 524.401 167.001 A 10.995 10.995 0 0 0 525 167.701 A 13.966 13.966 0 0 0 534.341 172.13 A 19.171 19.171 0 0 0 536 172.201 Q 542.109 172.201 549.506 169.134 A 61.947 61.947 0 0 0 553.7 167.201 A 96.891 96.891 0 0 0 565.492 160.1 A 123.262 123.262 0 0 0 573.6 153.901 Q 583.6 145.601 591.7 135.601 A 94.275 94.275 0 0 0 599.159 125.054 A 72.802 72.802 0 0 0 604 115.601 A 140.743 140.743 0 0 0 609.188 101.09 A 119.346 119.346 0 0 0 611 94.201 Q 613.4 83.801 613.4 75.201 Q 613.4 63.706 609.238 55.75 A 29.242 29.242 0 0 0 607.4 52.701 A 19.412 19.412 0 0 0 594.748 44.579 A 30.895 30.895 0 0 0 588.6 44.001 Q 587.6 44.001 586.4 44.101 Q 585.2 44.201 583.8 44.401 Q 580.108 45.324 577.954 45.537 A 11.853 11.853 0 0 1 576.8 45.601 A 8.507 8.507 0 0 1 575.95 45.562 Q 574.2 45.385 574.2 44.401 A 1.732 1.732 0 0 1 574.544 43.429 Q 575.372 42.215 578.2 40.801 A 13.079 13.079 0 0 1 584.119 39.372 A 13.852 13.852 0 0 1 586.6 39.601 A 31.095 31.095 0 0 1 589.183 39.492 A 29.69 29.69 0 0 1 604.7 43.901 A 34.618 34.618 0 0 1 615.214 53.815 A 44.566 44.566 0 0 1 618.4 59.101 A 44.881 44.881 0 0 1 622.453 71.021 Q 623.6 76.837 623.6 83.601 Q 623.6 91.001 622 99.601 Q 620.4 108.201 616.6 117.601 Q 611.6 130.201 602.6 141.001 Q 593.6 151.801 582.5 160.001 A 105.074 105.074 0 0 1 568.469 168.805 A 89.197 89.197 0 0 1 559.9 172.701 A 70.858 70.858 0 0 1 549.617 175.893 A 51.202 51.202 0 0 1 538.4 177.201 A 30.166 30.166 0 0 1 528.564 175.654 A 25.951 25.951 0 0 1 519.3 170.101 A 21.351 21.351 0 0 1 513.838 161.707 Q 512.544 158.245 511.999 153.937 A 53.689 53.689 0 0 1 511.6 147.201 Q 511.6 140.601 512.8 133.801 A 121.279 121.279 0 0 1 514.013 127.777 Q 514.75 124.563 515.6 121.801 Q 512.2 127.401 506.6 135.701 A 268.203 268.203 0 0 1 499.014 146.349 A 328.231 328.231 0 0 1 493.9 153.001 Q 486.8 162.001 479.2 169.901 Q 471.6 177.801 464 182.701 Q 456.4 187.601 449.6 187.601 Z M 307.4 93.401 L 319.8 93.401 Q 316.4 96.001 313.7 99.101 Q 311 102.201 307 110.401 L 305.6 113.201 A 530.519 530.519 0 0 0 304.857 114.695 Q 303.754 116.918 302.308 119.876 A 1525.854 1525.854 0 0 0 302.1 120.301 Q 300 124.601 297.9 129.001 A 1463.392 1463.392 0 0 0 296.894 131.113 Q 295.462 134.127 294.417 136.365 A 520.821 520.821 0 0 0 294.4 136.401 Q 292.157 141.232 291.254 144.351 A 22.354 22.354 0 0 0 291 145.301 Q 290.2 148.601 290.2 151.401 A 14.646 14.646 0 0 0 290.368 153.727 Q 291.06 158.001 294.6 158.001 A 7.819 7.819 0 0 0 297.796 157.239 Q 301.525 155.563 306.2 150.201 Q 311.8 143.601 317.2 134.401 Q 322.6 125.201 327.5 115.401 A 2308.858 2308.858 0 0 0 331.852 106.653 Q 333.89 102.533 335.691 98.846 A 1368.093 1368.093 0 0 0 336.2 97.801 Q 338.4 93.401 344 93.401 L 355 93.401 Q 351.803 96.016 348.554 100.532 A 67.869 67.869 0 0 0 346.1 104.201 A 135.859 135.859 0 0 0 342.599 110.163 Q 339.575 115.601 336.2 122.601 Q 334.87 125.451 332.817 129.747 A 1614.097 1614.097 0 0 1 332.6 130.201 A 80.023 80.023 0 0 0 329.133 138.71 A 89.195 89.195 0 0 0 328.7 140.001 Q 327 145.201 327 150.401 A 14.519 14.519 0 0 0 327.191 152.868 Q 327.957 157.286 331.799 157.398 A 6.929 6.929 0 0 0 332 157.401 A 11.018 11.018 0 0 0 337.848 155.618 Q 341.353 153.452 344.746 148.655 A 44.417 44.417 0 0 0 345.2 148.001 A 104.189 104.189 0 0 0 350.367 139.505 Q 352.712 135.233 355.029 130.245 A 205.277 205.277 0 0 0 357.8 124.001 Q 359.4 124.001 359.7 124.201 Q 359.945 124.364 360.123 125.323 A 11.695 11.695 0 0 1 360.2 125.801 Q 358 131.201 354.9 137.501 Q 351.8 143.801 347.9 149.601 A 44.467 44.467 0 0 1 343.598 155.07 A 34.575 34.575 0 0 1 339.3 159.001 A 17.341 17.341 0 0 1 333.402 162.007 A 16.279 16.279 0 0 1 329 162.601 A 10.987 10.987 0 0 1 324.579 161.733 A 10.508 10.508 0 0 1 320.8 158.901 Q 318.104 155.783 317.68 150.466 A 25.958 25.958 0 0 1 317.6 148.401 A 33.51 33.51 0 0 1 318.233 142.073 A 44.675 44.675 0 0 1 319.6 136.801 Q 316.2 142.801 311.8 148.801 A 55.554 55.554 0 0 1 306.808 154.735 A 43.663 43.663 0 0 1 302.4 158.701 Q 297.4 162.601 292.4 162.601 Q 290.802 162.601 288.728 162.073 A 27.062 27.062 0 0 1 287.1 161.601 A 11.546 11.546 0 0 1 282.307 158.569 A 14.113 14.113 0 0 1 281.7 157.901 Q 279.982 155.884 279.547 152.36 A 20.946 20.946 0 0 1 279.4 149.801 Q 279.4 145.855 281.358 140.988 A 43.139 43.139 0 0 1 282.8 137.801 L 288.8 125.801 Q 286.6 125.801 286.6 124.001 A 4.549 4.549 0 0 1 286.725 123.684 Q 287.033 122.959 287.964 121.079 A 237.389 237.389 0 0 1 288.4 120.201 L 292.2 112.601 A 994.179 994.179 0 0 1 295.974 105.13 A 899.828 899.828 0 0 1 296.5 104.101 Q 298.108 100.962 299.188 98.936 A 138.672 138.672 0 0 1 299.8 97.801 A 8.615 8.615 0 0 1 302.13 95.014 Q 303.821 93.728 306.164 93.467 A 11.164 11.164 0 0 1 307.4 93.401 Z M 643.8 163.401 Q 636.4 163.401 630.5 158.601 A 15.261 15.261 0 0 1 625.396 150.524 Q 624.7 147.965 624.613 144.89 A 31.436 31.436 0 0 1 624.6 144.001 A 41.244 41.244 0 0 1 625.771 134.459 A 55.41 55.41 0 0 1 628.3 126.601 Q 632 117.401 638.1 109.301 Q 644.2 101.201 651.7 96.101 Q 659.2 91.001 666.8 91.001 A 13.553 13.553 0 0 1 672.815 92.439 A 16.859 16.859 0 0 1 674.2 93.201 A 7.15 7.15 0 0 1 677.44 97.704 Q 677.772 98.984 677.798 100.536 A 15.849 15.849 0 0 1 677.8 100.801 Q 677.8 104.746 675.434 109.314 A 33.163 33.163 0 0 1 674 111.801 Q 670.2 117.801 663.2 123.001 Q 660.2 125.201 655.6 127.201 Q 651 129.201 646.4 130.501 A 46.262 46.262 0 0 1 643.682 131.186 Q 640.886 131.796 638.834 131.801 A 13.867 13.867 0 0 1 638.8 131.801 A 25.118 25.118 0 0 0 638.125 133.64 Q 637.491 135.576 636.9 138.201 Q 636 142.201 636 146.401 A 21.536 21.536 0 0 0 636.633 151.709 A 18.263 18.263 0 0 0 638 155.401 A 6.853 6.853 0 0 0 642.966 159.162 A 11.652 11.652 0 0 0 645.4 159.401 Q 652 159.401 657.7 155.601 A 42.842 42.842 0 0 0 667.01 147.115 A 48.762 48.762 0 0 0 667.9 146.001 A 84.776 84.776 0 0 0 674.355 136.444 A 75.897 75.897 0 0 0 675.6 134.201 A 197.267 197.267 0 0 0 677.762 130.037 Q 678.611 128.348 679.321 126.839 A 90.078 90.078 0 0 0 680.6 124.001 A 4.703 4.703 0 0 1 681.469 124.074 Q 682.913 124.346 682.995 125.641 A 2.524 2.524 0 0 1 683 125.801 Q 680.4 131.401 677.1 138.001 Q 673.8 144.601 669.3 150.301 Q 664.8 156.001 658.5 159.701 Q 652.2 163.401 643.8 163.401 Z M 640.2 128.201 A 12.009 12.009 0 0 0 641.838 128.07 Q 644.522 127.694 649.153 126.242 A 109.484 109.484 0 0 0 649.6 126.101 Q 656.2 124.001 661.6 119.401 A 37.002 37.002 0 0 0 666.929 113.621 A 31.132 31.132 0 0 0 669.6 109.301 A 35.625 35.625 0 0 0 671.069 106.049 Q 672.378 102.678 672.4 100.088 A 10.395 10.395 0 0 0 672.4 100.001 A 8.912 8.912 0 0 0 672.273 98.422 Q 671.763 95.601 669.2 95.601 A 5.136 5.136 0 0 0 667.662 95.868 Q 666.171 96.34 664.211 97.647 A 31.454 31.454 0 0 0 662.6 98.801 Q 659.092 101.473 654.189 107.215 A 138.499 138.499 0 0 0 652.2 109.601 Q 648.4 114.401 645 120.001 Q 641.727 125.392 640.308 128.002 A 55.107 55.107 0 0 0 640.2 128.201 Z M 675.2 136.601 L 688.6 102.401 A 11.442 11.442 0 0 0 688.96 101.28 Q 689.2 100.36 689.2 99.601 A 6.755 6.755 0 0 0 688.926 97.644 A 5.761 5.761 0 0 0 688.2 96.101 L 686.8 94.001 L 697.8 93.601 A 16.934 16.934 0 0 1 698.332 93.574 Q 700.918 93.483 702.1 94.301 Q 702.991 94.917 703.271 95.675 A 2.074 2.074 0 0 1 703.4 96.401 A 3.563 3.563 0 0 1 703.323 97.073 Q 703.114 98.14 702.331 100.025 A 44.415 44.415 0 0 1 702 100.801 Q 700 105.601 696.6 112.801 Q 693.2 120.001 689.9 127.601 Q 686.6 135.201 684.3 141.801 A 67.567 67.567 0 0 0 683.294 144.913 Q 682 149.301 682 152.001 A 8.639 8.639 0 0 0 682.249 154.123 A 6.623 6.623 0 0 0 683.3 156.401 Q 684.6 158.201 687.8 158.201 A 11.505 11.505 0 0 0 692.817 157.007 Q 694.467 156.216 696.1 154.901 A 35.521 35.521 0 0 0 700.555 150.587 A 47.023 47.023 0 0 0 703.8 146.401 A 100.236 100.236 0 0 0 709.717 136.688 A 110.935 110.935 0 0 0 710.5 135.201 Q 713.6 129.201 715.8 124.001 A 4.703 4.703 0 0 1 716.669 124.074 Q 718.113 124.346 718.195 125.641 A 2.524 2.524 0 0 1 718.2 125.801 A 116.486 116.486 0 0 1 716.532 129.748 Q 715.479 132.122 714.205 134.754 A 212.591 212.591 0 0 1 713 137.201 Q 709.8 143.601 705.7 149.301 A 49.102 49.102 0 0 1 700.406 155.542 A 40.85 40.85 0 0 1 696.7 158.801 A 18.721 18.721 0 0 1 691.789 161.59 A 15.828 15.828 0 0 1 686.2 162.601 Q 681.634 162.601 678.743 160.963 A 8.858 8.858 0 0 1 675.8 158.301 A 16.725 16.725 0 0 1 672.812 149.096 A 20.465 20.465 0 0 1 672.8 148.401 Q 672.8 145.401 673.5 142.301 A 44.285 44.285 0 0 1 674.492 138.621 A 36.336 36.336 0 0 1 675.2 136.601 Z M 704 81.201 Q 701.4 81.201 699.5 79.201 Q 697.6 77.201 697.6 74.401 A 7.876 7.876 0 0 1 699.378 69.427 A 11.023 11.023 0 0 1 700.4 68.301 A 10.451 10.451 0 0 1 702.774 66.553 A 8.095 8.095 0 0 1 706.6 65.601 Q 709.4 65.601 711.4 67.401 A 5.861 5.861 0 0 1 713.392 71.655 A 7.587 7.587 0 0 1 713.4 72.001 Q 713.4 75.601 710.6 78.401 A 9.608 9.608 0 0 1 707.499 80.522 A 9.005 9.005 0 0 1 704 81.201 Z'
  const { resolvedTheme, forcedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark' || forcedTheme === 'dark'
  const [logoColor, setLogoColor] = useState('#303030')

  useEffect(() => {
    setLogoColor(isDarkMode ? '#ffffff' : '#303030')
  }, [isDarkMode])

  return (
    <div className="flex justify-center">
      <svg
        style={{ transform: 'translate3d(0, 0, 0)' }}
        width="120"
        height="40"
        viewBox="0 0 820 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="signaturePath" d={pathData} stroke={logoColor} strokeWidth="2" />
        <style jsx>{`
          #signaturePath {
            stroke-dasharray: 2400;
            stroke-dashoffset: 2400;
            fill: transparent;
            animation: drawSignature 8s linear infinite;
          }

          @keyframes drawSignature {
            0% {
              stroke-dashoffset: 2400;
            }

            15% {
              fill: transparent;
            }

            35%,
            75% {
              stroke-dashoffset: 0;
              fill: ${logoColor};
            }

            90%,
            100% {
              stroke-dashoffset: 2400;
              fill: transparent;
            }
          }
        `}</style>
      </svg>
    </div>
  )
}

export default Logo
