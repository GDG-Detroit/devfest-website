import aboutLogo from '@/assets/images/aboutLogo.png'

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex h-screen flex-col items-center justify-center text-center"
    >
      <div id="text-aboutPage" className="mx-auto mb-8 max-w-screen-lg">
        <p className="text-sm font-normal md:text-base lg:text-lg xl:text-xl">
          The Detroit and Ann Arbor Google Developer Groups (GDG) are teaming up
          once again to bring you the 9th Michigan DevFest on October 26, 2024,
          at the Little Caesar&apos;s Global. With our 9th DevFest, we aim to
          put together a great day of networking and knowledge sharing for all
          involved.
        </p>
      </div>

      <img
        className="mx-auto mt-14 h-auto w-full object-cover"
        src={aboutLogo}
        alt="About Logo"
      />
    </section>
  )
}

export default AboutSection
