import Logo from "@/components/ui/logo";

const About = () => {
  return (
    <div className="flex-grow max-w-3xl mx-auto p-10">
      <div className="flex justify-center">
        <div className="text-5xl flex font-semibold">
          <svg
            width="48"
            height="48"
            className="mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_327_50)">
              <path
                d="M12.2333 0.762104C12.2482 0.686672 12.2498 0.608686 12.2378 0.532597C12.2258 0.456507 12.2004 0.383805 12.1633 0.318643C12.126 0.253479 12.0777 0.197132 12.0211 0.152815C11.9644 0.108499 11.9004 0.0770831 11.8328 0.0603606L11.8064 0.0538017C11.7388 0.0370792 11.669 0.0353778 11.6009 0.0487947C11.5327 0.0622116 11.4676 0.0904837 11.4092 0.131997C11.3508 0.173511 11.3003 0.227453 11.2607 0.290743C11.221 0.354034 11.1929 0.425434 11.1778 0.500867L10.377 4.5342C10.362 4.60964 10.3605 4.68763 10.3725 4.76371C10.3845 4.8398 10.4098 4.9125 10.4471 4.97766C10.4842 5.04283 10.5325 5.09918 10.5892 5.1435C10.6459 5.18782 10.7098 5.21923 10.7774 5.23594L10.8038 5.2425C10.8715 5.25923 10.9413 5.26093 11.0094 5.24751C11.0777 5.2341 11.1428 5.20583 11.2011 5.16432C11.2594 5.12279 11.3099 5.06885 11.3496 5.00557C11.3893 4.94227 11.4174 4.87088 11.4324 4.79544L12.2333 0.762104Z"
                fill="#8B5CF6"
              />
              <path
                d="M6.78415 1.80098C6.7184 1.6707 6.60898 1.57491 6.47998 1.53469C6.35096 1.49447 6.21293 1.51312 6.09623 1.58653L6.07986 1.59682C6.02209 1.63317 5.97128 1.68187 5.93036 1.74015C5.88943 1.79842 5.85919 1.86512 5.84136 1.93644C5.82352 2.00777 5.81844 2.08232 5.82641 2.15583C5.83438 2.22935 5.85523 2.30039 5.88779 2.3649L7.84355 6.24019C7.90931 6.37048 8.01873 6.46627 8.14774 6.50649C8.27675 6.5467 8.41478 6.52805 8.53148 6.45464L8.54784 6.44436C8.60562 6.40801 8.65643 6.35929 8.69735 6.30103C8.73827 6.24276 8.76852 6.17606 8.78635 6.10473C8.80419 6.03341 8.80927 5.95886 8.8013 5.88534C8.79334 5.81183 8.77248 5.74078 8.73991 5.67627L6.78415 1.80098Z"
                fill="#8B5CF6"
              />
              <path
                d="M21.383 11.3243C21.2202 11.6994 21.006 11.9255 20.7402 12.0023C19.2996 12.4194 17.8575 12.8322 16.4139 13.2408C16.2052 13.3002 15.9172 13.3433 15.7555 13.2478C15.5082 13.1033 15.1858 12.8097 14.8946 12.9088C14.2721 13.1223 13.6317 13.3343 12.9736 13.5449C12.9385 13.5562 12.9079 13.5802 12.8867 13.6133C12.8655 13.6462 12.8549 13.6862 12.8567 13.7266C12.8623 13.8734 12.9093 14.021 12.9976 14.1693C13.8637 15.6233 15.4247 16.3305 16.9555 15.9018C18.2251 15.5453 19.4936 15.1849 20.7611 14.8206C21.374 14.645 21.8164 14.4726 22.0884 14.3033C23.2581 13.574 23.9896 12.127 23.9353 10.6439C23.9019 9.71536 23.5064 8.37206 23.2633 7.30604C23.0887 6.54022 22.933 6.01245 22.7958 5.72274C22.2073 4.47264 21.0073 3.6338 19.7541 3.58021C19.3924 3.56468 18.8223 3.66681 18.0438 3.88662C16.8905 4.21205 15.7361 4.53361 14.5805 4.85128C13.862 5.04856 13.2414 5.43652 12.719 6.01516C12.1753 6.61749 12.3204 7.72545 13.0717 7.9573C13.2623 8.01633 13.5357 7.99536 13.8918 7.89439C15.4564 7.45012 17.0202 7.00274 18.5833 6.55225C19.176 6.38137 19.5743 6.30721 19.7781 6.32973C20.2867 6.38643 20.6139 6.74293 20.76 7.39924C20.9681 8.33128 21.1893 9.26021 21.4237 10.186C21.535 10.6272 21.5214 11.0066 21.383 11.3243Z"
                fill="#8B5CF6"
              />
              <path
                d="M6.44062 7.95947C6.48607 7.81125 6.47692 7.64896 6.4152 7.50828C6.35347 7.36759 6.24421 7.26004 6.11146 7.2093L2.61868 5.87413C2.48594 5.82338 2.34057 5.8336 2.21457 5.90253C2.08856 5.97144 1.99225 6.09342 1.94679 6.24164L1.93868 6.26809C1.89323 6.4163 1.90237 6.5786 1.96411 6.71928C2.02583 6.85997 2.13509 6.96751 2.26783 7.01826L5.76061 8.35343C5.89336 8.40416 6.03872 8.39396 6.16473 8.32503C6.29073 8.25612 6.38706 8.13413 6.4325 7.98592L6.44062 7.95947Z"
                fill="#8B5CF6"
              />
              <path
                d="M10.0133 16.348C10.0289 16.7115 9.94441 17.1565 9.7305 17.3895C8.74824 18.4582 7.76702 19.5289 6.78685 20.6016C6.34754 21.0804 5.97502 21.3926 5.38441 21.1853C5.18615 21.1154 4.95032 20.9243 4.67693 20.6121C4.09606 19.9503 3.51763 19.2866 2.94163 18.621C2.52285 18.1378 2.40389 17.6493 2.58476 17.1554C2.66476 16.9355 2.92076 16.5926 3.35276 16.1266C4.58268 14.7993 5.78336 13.4389 6.95485 12.0455C7.2178 11.7332 7.29293 11.388 7.18024 11.0097C6.93293 10.1756 6.26719 10.0894 5.59728 10.3771C5.08459 10.5969 4.59624 10.9573 4.13224 11.4583C3.21676 12.4454 2.30719 13.4397 1.40354 14.4408C0.963193 14.9278 0.665803 15.327 0.511368 15.6385C-0.0489803 16.7616 -0.085502 18.2156 0.411194 19.355C0.582324 19.7472 0.977107 20.301 1.59554 21.0163C2.27902 21.8074 3.11067 22.9095 3.87345 23.4163C4.92424 24.1142 6.30267 24.1515 7.37224 23.534C7.68598 23.3523 8.10963 22.9733 8.64319 22.3969C9.5385 21.4291 10.4335 20.461 11.3281 19.4924C12.5656 18.1526 12.8463 16.1266 11.9594 14.4606C11.8675 14.2874 11.7597 14.2641 11.6359 14.3907C11.1462 14.8917 10.6543 15.3907 10.1604 15.8878C10.0801 15.9693 10.007 16.1989 10.0133 16.348Z"
                fill="#8B5CF6"
              />
            </g>
            <defs>
              <clipPath id="clip0_327_50">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Alpas
        </div>
      </div>
      <div className="mt-16 leading-6	text-muted-foreground">
        <p className="indent-8">
          Alpas is a simple search app that returns projects from Behance
          together with their Figma prototype. As a front-end developer
          practicing proper design-to-code implementation, looking for good
          assets is a must to showcase your ability to create stunning and
          beautiful web apps. While there are various websites that may offer
          figma prototypes, such as Figma Community, there is no bigger source
          than Behance. Behance is the go-to platform of designers for
          displaying their designs. There is currently no filter for Figma
          prototype in Behance, so this small problem can be patched by Alpas.
        </p>
        <br />
        <p className="indent-8">
          Hopefully, you will find Alpas useful during your web
          designing/development. Feel free to share ideas and suggestion for
          Alpas. You can contact me via the channels I provided in the footer.
          Thank you, have fun designing!
        </p>
        <br />
        <br />
        <div className="flex justify-end text-secondary-foreground font-bold text-xl">
          <p className="underline decoration-wavy decoration-primary">- Alec</p>
        </div>
      </div>
    </div>
  );
};
export default About;
