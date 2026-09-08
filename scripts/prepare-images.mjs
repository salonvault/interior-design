import { mkdir } from "node:fs/promises";
import sharp from "sharp";
const images = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLS4b7yf72ndAFO3hIl22rHgrbmup2WoaG8-4XY9M0G2-s6zBDm0WSKCbBRLzf9kIVHoHYTXgjkbPkZcPSbgoHvi5MqmjgQZjpCYND-FZYEzUHgqRZDajwrXGDuuWkBXCQKbjrMUet58hKOHBRcHMPZ6z1p-arQ6gGqL_b4gjC-sWcM7DL4zEWJqTMOJxtNb3Nue_drhdzXu7_LB_mV1Pup9TGG9muOCg0r5E298m3lTCEk2GRLOb7",
  house27:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAAaiO-x0zt8t4l7-c6ylp0AVT-nmpXDtDcjrIeJW80qGfSaIBQfamNR8TG6T4k4ZkGTyL_sB9bcYyVXjs--eHK5jO5812FBQHxejihZZJ6s1ordVo4sjT0ntneDHCtwVcGP8G-nCwWR7hWGzQxwr-WfI_RyaLX4LU47AhMhUYZE7rmdFfEKb6AL9YN11RIiL4z4wONbXt05fCQkXtotKDSkfo2g1cTs69z-O0Lk7aIHRsUOUTEghPo",
  margalla:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmna12UpsjrDhSXkWc6A6zbIEvSyrvH1YS9UYVpdY2WWRtEw0BXWJgMZHvv2fdlWMlw9rPLeNyXBMbNvegph-GnyLcxRFZ5qi44ZNSVMP9KzbOThlsmd6P53Rjm9S1PgyFkqKJi1VN5XMZmkLVxVarQdhFzSLIpXBss1hDOXxk3LwzkKjySh9CvO9JRfNufHPI3YuBrv-HVjgnJbLAc3kYJs7w6jIJg39EchVeDkZE6qIM_-nDT8K8",
  courtyard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDl_4cIYi63buofz9pFU_ptPHrhIRN1cFyPR4zVKna17VM2bAgueGzjOHEhE0TppEmwlYPK0j8ZBtaF_xDU4BRm4KWQyK_dCl9lyimbg5BpLHWleDiaY2mDRLenKqiSCC3gTHoLZrzf7rnuwGWV1vxTJ7B2XBvCo7YIliJDgdAs4D-dKXF14DTBSf5kXqq-ZAwLT8xv_m72WX-DPms6I4saCAPQqrWOYVIWsKtqI-FNHg_Cd5zaRO3F",
  hearth:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCffnz2IodSZwyPLD4LnQaKPbHkj1DFmGpZz3P3kH30d6aDHTxH8F775ZL9pWVoGlWvJtm2luGHTkfC8Di4pY0YAZS-tag-aWL2ibPPIlRZR1oVp7CMqcWOssjCSzVT2ulioSg72Z5J5B4kbhH3rISer8EbJbKcwuSznIywUzxUXXllrqiB0ythhcq-w86pVB0o-HGCDbwu67dJ7L10y41oIwDURsl_lgmVmcmx3iFbrozvU0k4htPq",
  stair:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fp87yAcooJZy73F0QXWeo3GdAOxqud3IU5e4rYfZK64jqnAHhMgPHMtuOfvnA5vSG6vVUuXoU1ITsBDiwgYXqo1t04IG0BN8sFQ61qtwbOZaDuMJke-35FobuBSRFAtVCl5ZE3wS0fd9Jit95B3uKDSWUrAYFxCrtoVLSU5TUMUTc03WKp6Yr9N0yaOvGt_DxQ8RkjQbKi0prod3bSJw4IRxlAEw1umDKXsU8IYVsg6KCVHlN8Fh",
  detail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCZJydy2Z9u76Yx9AxhRY_2nHjmcZzohlxgrp4tXMpfFFUA5g3KgHALEFuqfaHKQK-vNnT8qTKc024WCvEP4D8-NP1AZDPzQvJJ71w87QFxcqS5je41um8d5328_yEEYMvyUWxpKQLiJUhXzOSRL5fU6QJr4Xzj8XESEgg8MnezyaF0VU2V_L-kT1YzA9-vr4M1dJ2I6NrXFcLeYF3QaZelWoqrhcFrOUn5bPYjQAjrT8GSx-Q-kb0W",
  pavilion:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjyLA5_Ci-rKBDaQXfLIcC7MeUpUyM_wEtPnFE5KpjBxUoqAIkF80hTGnl6vXLB3kU9ANUy-Pv-ztBgAFp3_aM4I1aLfLbqhITpSHKUpIbOLq10VC7KrS9bIhbzKVZsDtGFDRy8nmj08J-5gXzdodvAFuj_3hnEB7pv0d8Fmz-zfVnbEjzFXQ51DeIDZNCAkrMvirIbG7aHnzp3kmUIq82jbjC3Zn2qpPIK3PjT90_KyW0sWe5XdAe",
  walnut:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBK-8JMbG6rdeJ9JPw_3DCtBZfsWqf1GXOZEJwvLpOoFtxkTKHuWYg-hmG_HalEOpR3nPjFK5lD95HfOumstjPKpfk2caHLqqioVjLZkBjnx7EvoD7qykcT24gNsk_aOZ6NpUALoqLtMCl41LVv0EpFykuib119C6QOO0oe3D7Dan7HStIkR2qUQyK62Jbx78oFNH5OiQSta1RVCkUsg0cQDPVtfG9myLX5AcjP48DsojBpmawLxYS3",
  travertine:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBFkyoSg2424r2Rwp7h0I6NdHEpgk13Pn5eUzv-0WTrxpJh7bNYpARJt02xbBEZNLvqb6vxeKOMks1t4t57tW7sin-XpXSE_3NSpCIYOXWyGqaFj8BrNipNgyCR9d03uAS0o2Va1GAFgt2UBdTSfp-Sye9v6E5mHHilkxY_w4MP2kSiFFoUpSzZSpBbohetnqZFoKoOhhmU7WXEAritgAzQ8hlIUHCkwX8bZvuDGhqGmQvjW-Bjogbw",
  journal2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUMuZY90hwjQxRJsUEexGzK4KpBiG71deu3jin5GXwotz0BAD76ddajJfw7U7UntaU6yf811klcyfXTyrTkOLaM-DKECdWetw0DrszbvKRbAaNj6jBwSmD4sC1bIvkf5SJDzHvLCx7oYsYC2SCOEga-sYk0sKNXX-81gd1dYr7cibP7qwB9aTOF4Ma5MoAaAREodihzIcqbCsXRDjzPPNZdmOpWrHt2OxGyba1Imn20wlz8egncIYo",
};
await mkdir("public/images", { recursive: true });
await Promise.all(
  Object.entries(images).map(async ([name, url]) => {
    const response = await fetch(url + "=s0");
    if (!response.ok) throw new Error(name + ": " + response.status);
    const data = Buffer.from(await response.arrayBuffer());
    await sharp(data)
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile("public/images/" + name + ".webp");
    console.log(
      name +
        " saved: " +
        JSON.stringify(
          await sharp(data)
            .metadata()
            .then(({ width, height }) => ({ width, height })),
        ),
    );
  }),
);
