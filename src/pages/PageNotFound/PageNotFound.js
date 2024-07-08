import React from 'react'
import styles from "./PageNotFound.module.css";
import bg from "../../assets/bg.jpg";

const PageNotFound = () => {
  return (
    
        <div className={styles.notfoundcontainer}>
		<div className={styles.notfound}>
			<div className={styles.notfound404} >
				<h1 style={{background:`url(${bg}) no-repeat`}}>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a href="/">Go To Homepage</a>
		</div>
	</div>
    
  )
}

export default PageNotFound