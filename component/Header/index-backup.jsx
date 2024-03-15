'use client'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import SiteLogo from '../../public/images/rigved-logo.svg'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathName = usePathname()
    console.log(pathName, 'pathName')
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    const [isMenuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        document.body.classList.toggle("bodymenu-open", !isMenuOpen);
      };

      const toggleSubMenu = (index) => {
        setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    const NavMenuContent = [

        {
            title: 'Services',
            link: '/services',
            activePath: '/services',
            children: [
                { link: "/services", title: "Digital Services" },
                { link: "/services", title: "ERP Transformation & Support" },
                { link: "/services", title: "Digital workplace (dwp)" },
                { link: "/services", title: "infrastructure & cloud" },
                { link: "/services", title: "strategic staffing" },
              ],
        },
        {
            title: 'Solutions',
            link: '/solutions',
            activePath: '/solutions',
            children: [
                { link: "/solutions", title: "Truplan" },
                { link: "/solutions", title: "Truconnect" },
                { link: "/solutions", title: "Trutransformation" },
                { link: "/solutions", title: "Truarchival" },
                { link: "/solutions", title: "Truworkplace" },
              ],
        },
        {
            title: 'About Us',
            link: '/about-us',
            activePath: '/about-us'
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
                                        <li
                                            key={index}
                                            className={`${styles.NavMenu} ${item.children ? styles.hassubmenu : ""}
                                            ${
                                                pathName == item?.activePath
                                                    ? styles.active
                                                    : ''
                                            }`}
                                        >
                                            {item.children ? (
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
                                                {item.children.map((childItem, childIndex) => (
                                                <li key={childIndex} className={`${styles.SubNavMenu} ${
                                                    pathName == item?.activePath
                                                        ? styles.active
                                                        : ''
                                                }`}>
                                                    <Link
                                                    href={childItem.link}
                                                    title={childItem.title}
                                                    className={styles.sublink}
                                                    >
                                                    {childItem.title}
                                                    </Link>
                                                </li>
                                                ))}
                                            </ul>
                                            )}
                                        </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>
                        <Link href={'/contact-us'} className={styles.contactBtn} title='Contact Us'>
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
