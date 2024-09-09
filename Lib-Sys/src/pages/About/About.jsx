/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import aboutImg from "../../assets/about-img.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt='about img' />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Books</h2>
            <p className='fs-17'>Curabitur fermentum neque faucibus convallis porttitor. Praesent gravida justo quis vestibulum accumsan. Suspendisse vitae imperdiet turpis, vitae aliquet metus. Nunc ligula lorem, faucibus non diam sit amet, rutrum commodo nisl. Aenean ut semper purus. Fusce in blandit quam. Cras in augue diam. Maecenas aliquet risus vulputate, tincidunt ligula eu, varius magna. Quisque pretium porttitor elit. Nunc ac lacinia neque. Ut et mattis elit, sagittis tincidunt nunc. Sed lacinia quis tellus at laoreet. Nam a luctus leo.

              Donec interdum leo diam, sit amet ultrices purus gravida quis. Vivamus risus leo, porttitor eget dui quis, fermentum egestas nisi. Aenean ut facilisis tortor, mattis rhoncus nisl. Etiam ut ante eget arcu pellentesque hendrerit id et diam. Curabitur a lectus tellus. Mauris hendrerit, arcu mattis pellentesque euismod, dolor felis imperdiet ligula, in facilisis ex quam ut magna. </p>
            <p className='fs-17'>Donec sit amet suscipit elit. Pellentesque pretium velit nec lorem convallis facilisis. Nulla euismod et ante ac efficitur. Praesent eros turpis, lacinia eget lacinia eu, viverra nec dui. Aenean cursus metus lacus, eget egestas massa ultricies condimentum. Vivamus maximus ipsum vel interdum lobortis. Integer congue venenatis lorem, vel varius nisi tincidunt quis. Vestibulum vel urna tincidunt, hendrerit risus ut, fringilla justo. Duis ac urna leo. Maecenas eu velit non lectus pharetra laoreet. Morbi non posuere odio, vulputate consectetur velit. Vivamus nec maximus ipsum. Nunc finibus risus ut ex dapibus aliquam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About