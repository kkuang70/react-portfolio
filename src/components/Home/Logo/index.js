import './index.scss';
import LogoK from '../../../assets/images/logo-simple-k.png'
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
        outlineLogoRef.current = gsap
            .timeline()
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 30,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoK} alt="K" />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000">
                <g
                    className="svg-container"
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M1031 2725 c-52 -47 -69 -87 -97 -224 -38 -195 -60 -407 -104 -1011
-12 -174 -20 -852 -11 -1043 5 -114 10 -150 21 -158 20 -13 91 -4 101 13 5 7
31 79 58 159 57 167 115 300 196 449 75 137 156 273 169 282 15 10 52 -13 140
-87 165 -139 587 -400 774 -479 112 -47 268 -96 306 -96 12 0 31 6 41 14 19
14 19 15 2 34 -10 11 -51 36 -90 55 -40 19 -119 58 -177 86 -184 88 -596 347
-747 467 -68 55 -133 128 -133 150 0 17 12 18 29 2 11 -11 12 -7 7 22 -5 29
-1 45 22 80 103 161 524 544 575 524 7 -2 17 6 22 18 6 13 22 25 40 29 96 19
315 176 315 225 0 56 -73 37 -287 -73 -272 -140 -348 -197 -602 -449 -107
-107 -197 -191 -201 -189 -4 3 -25 27 -46 54 -20 28 -41 48 -44 46 -4 -3 -15
-32 -24 -65 -16 -56 -16 -64 0 -119 20 -74 15 -91 -66 -217 -33 -51 -106 -182
-162 -291 -56 -109 -108 -207 -116 -218 -12 -17 -13 23 -8 320 4 187 11 385
16 440 17 202 30 355 45 555 28 363 66 587 111 652 52 75 -4 107 -75 43z m5
-109 c-38 -128 -63 -335 -96 -766 -12 -151 -25 -315 -30 -365 -5 -49 -12 -239
-16 -422 -7 -302 -6 -334 10 -357 9 -14 25 -26 36 -26 28 0 57 45 155 238 49
96 113 213 143 260 99 158 99 160 86 290 -8 79 -2 87 36 47 45 -48 57 -41 284
183 165 162 235 224 319 280 119 80 426 237 448 230 18 -6 -97 -89 -180 -129
-152 -73 -202 -103 -287 -170 -98 -78 -308 -282 -379 -370 -52 -63 -115 -183
-115 -218 0 -29 55 -96 127 -156 156 -130 606 -410 822 -512 62 -30 111 -56
109 -59 -9 -8 -190 57 -293 105 -149 71 -542 317 -654 410 -158 132 -186 143
-233 94 -32 -34 -87 -125 -165 -269 -87 -164 -145 -295 -198 -448 -27 -76 -55
-145 -63 -153 -14 -14 -17 -13 -29 3 -10 14 -13 78 -13 273 -1 583 1 760 11
885 50 668 57 733 89 927 23 132 41 199 65 235 25 38 29 22 11 -40z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo;