'use client'
import React, { useState,useEffect } from 'react'
import styles from './Header.module.scss'

import Image from 'next/image'
import SiteLogo from '../../public/images/rigved-logo.svg'
import { usePathname } from 'next/navigation'
import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Link from 'next/link'


const Header = () => {
    const pathName = usePathname()

    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        document.body.classList.toggle("bodymenu-open", !isMenuOpen);
      };

      const toggleSubMenu = (index) => {
        setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
      };

      useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

      const scrollToTop = () => {
        scroll.scrollToTop();
      };

      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };

      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };

      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };

      // Function to handle the activation of a link.
      const handleSetActive = (to) => {
        console.log(to);
      };

    const NavMenuContent = [

        {
            title: 'Services',
            link: '/services',
            activePath: '/services',
            type: 'button',
            children: [
                { link: "/services/digital-transformation", title: "Digital Transformation" },
                { link: "/services/erp-transformation-support", title: "ERP Transformation & Support" },
                { link: "/services/digital-workplace", title: "Digital Workplace (dwp)" },
                { link: "/services/infrastructure-cloud", title: "Infrastructure & Cloud" },
                { link: "/services/strategic-staffing", title: "Strategic Staffing" },
              ],
        },
        {
            title: 'Solutions',
            // link: '/solutions',
            activePath: '/solutions',
            type: 'button',
            children: [
                { link: "/solutions/truplan", title: "TRUPlan" },
                { link: "/solutions/truconnect", title: "TRUConnect" },
                { link: "/solutions/trutransform", title: "TRUTransformation" },
                { link: "/solutions/truworkplace", title: "TRUWorkplace" },
                { link: "/solutions/truams", title: "TRUAMS" },
                { link: "/solutions/truarchival", title: "TRUArchival" }
              ],
        },
        {
            title: 'About Us',
            link: '/about-us',
            activePath: '/about-us',
            //type: 'button',
            //id:"aboutussection"

        },
        {
            title: 'Careers',
            link: '/careers',
            activePath: '/careers'
        },
        // {
        //     title: 'Blogs',
        //     link: '/blogs',
        //     activePath: '/blogs'
        // }
    ]

    return (
        <header className={styles.headerSection}>
            <div className="container">
                <div className={styles.headerWrap}>
                    <Link
                        href="/"
                        className={styles.headerLogo}
                        title="RigvedIT"
                    >
                        <Image src={SiteLogo} alt="rigvedIT" onClick={()=>setMenuOpen(false)} />
                    </Link>
                    <nav
                        className={`${styles.navBarMenu} ${
                            isMenuOpen ? styles.menuOpen : ''
                        }`}
                    >
                        <button
                            className={styles.toggleMenuwrap}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={styles.headerMenunav}>
                            <ul>
                                {NavMenuContent.map((item, index) => {
                                    return (
                                        <>
                                        <li key={index} className={`${styles.NavMenu} ${item.children ? styles.hassubmenu : ""} ${ pathName.includes(item?.activePath)  ? styles.active : '' }`} >
                                        {item.type === 'button' ?
                                              !item.id==""  ?
                                              pathName =="/" ?
                                            <Button
                                                title={item.title}
                                                to={item?.id}
                                                spy={true}
                                                smooth={true}
                                                isDynamic={true}
                                                onSetActive={handleSetActive}
                                                activeClass="active"
                                                className={styles.sitelink}
                                            >
                                              {item.title}
                                          </Button>
                                              :
                                              <Link
                                              onClick={()=>
                                            {
                                                document.body.classList.remove("bodymenu-open")
                                                setMenuOpen(false)
                                            }
                                            }
                                              href={item.link}
                                              title={item.title}
                                              className={styles.sitelink}
                                          >
                                            {item.title}
                                        </Link>  :

                                        (
                                            <button
                                                title={item.title}
                                                onClick={() => toggleSubMenu(index)}
                                                className={`${styles.submenuBttn} ${openSubMenuIndex === index
                                                    ? styles.submenuBtnOpen
                                                    : ""
                                                    }`}
                                            >
                                                {item.title}
                                            </button>
                                        ) : (
                                            <Link
                                            onClick={()=>
                                                {
                                                    document.body.classList.remove("bodymenu-open")
                                                    setMenuOpen(false)
                                                }
                                            }
                                                href={item.link}
                                                title={item.title}
                                                className={styles.sitelink}
                                            >
                                                {item.title}
                                            </Link>
                                        )}

                                        {item.children && (
                                            <ul
                                                className={`${styles.submenuWrap} ${openSubMenuIndex === index ? styles.submenuOpen : ""
                                                    }`}
                                            >
                                                {item.children.map((childItem, childIndex) =>
                                                {
                                                    return(
                                                        <li key={childIndex} className={`${styles.SubNavMenu} ${
                                                            pathName.includes(childItem?.link)
                                                                ? styles.active
                                                                : ''
                                                            }`}>
                                                            <Link
                                                            onClick={()=>
                                                                {
                                                                    {
                                                                        document.body.classList.remove("bodymenu-open")
                                                                        setMenuOpen(false)
                                                                    }
                                                                    }
                                                                }
                                                                href={childItem.link}
                                                                title={childItem.title}
                                                                className={styles.sublink}
                                                            >
                                                                {childItem.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                }

                                                )

                                                }
                                            </ul>
                                        )}
                                    </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                        <Link href={'/contact-us'} className={styles.contactBtn} title='Contact Us'
                         onClick={()=>
                            {
                                {
                                    document.body.classList.remove("bodymenu-open")
                                    setMenuOpen(false)
                                }
                                }
                            }
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
