import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
       <section className="
    section
    
    is-width-wide
    
      has-background
    
    text_cta
  ">
        <div className="bg_image">
          <div className="desktop_img">
            <img srcSet="//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=165 165w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=360 360w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=535 535w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=750 750w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=1070 1070w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357 1367w
        " src="//cdn.shopify.com/s/files/1/0155/8131/files/Group_4932.png?v=1652346357&width=1500" sizes="100vw" alt="" loading="lazy" width={1367} height={346} />
          </div>
          <div className="mobile_img">
            <img srcSet="//cdn.shopify.com/s/files/1/0155/8131/files/Group_4058_29ac73ce-f1de-45fd-a4f7-bc35a5925187.png?v=1664284653&width=165 165w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4058_29ac73ce-f1de-45fd-a4f7-bc35a5925187.png?v=1664284653&width=360 360w,//cdn.shopify.com/s/files/1/0155/8131/files/Group_4058_29ac73ce-f1de-45fd-a4f7-bc35a5925187.png?v=1664284653 429w
        " src="//cdn.shopify.com/s/files/1/0155/8131/files/Group_4058_29ac73ce-f1de-45fd-a4f7-bc35a5925187.png?v=1664284653&width=1500" sizes="100vw" alt="" loading="lazy" width={429} height={326} />
          </div>
        </div>
        <div className="
      container
      has-limit
      custom_text_cta
    ">
          <div className="columns one-whole parmargin">
            <div className="rich-text__content card-content">
              <h2 className="rich-text__heading title text-align-left ">
                JOIN THE ITOKRI PARIVAAR
              </h2>
              <div className="rich-text__text has-columns--1 text-align-left content ">
                <div>
                  <p>Welcome ji to our world of art &amp; craft. Here you will get ekdum fresh new arrivals and aur bahut kuch. If you value the hardwork of our artisans and look forward to adorning yourself or your home with something meaningful, toh fir sign up and join the parivaar. Itokri ki toli awaits you.</p>
                </div>
              </div>
              <p className="toggleNewsletter showForm">Register Now</p>
              <style data-shopify dangerouslySetInnerHTML={{__html: "\n\n  #shopify-section-template--16897766424771__0137743a-aa95-442a-b567-6da26283d8f8 .newsletter-form__wrapper {\n    \n  }\n\n  \n\n\n" }} />
              <div className="newsletter-form__wrapper showNewsletter">
                <div className="form__success-message text-align-" />
                <form method="post" action="/contact#contact_form" acceptCharset="UTF-8" className="contact-form newsletter-form--newsletter-section"><input type="hidden" name="form_type" defaultValue="customer" /><input type="hidden" name="utf8" defaultValue="✓" />
                  <input type="hidden" name="contact[tags]" defaultValue="prospect,newsletter" />
                  <input type="hidden" name="challenge" defaultValue="false" />
                  <div className="newsletter-form form is-responsive">
                    <div className="field is-stretched-width">
                      <label className="label newsletter__text is-sr-only">
                        Enter Email<span className="required">*</span>
                      </label>
                      <div className="control ">
                        <input className="input is-primary-btn-style is-regular" type="email" name="contact[email]" placeholder="Enter Email*" required />
                      </div>
                    </div>
                    <div className="field is-default-width is-align-self-end">
                      <div className="control">
                        <button type="submit" className="btn button button--primary is-within-form">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
