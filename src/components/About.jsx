import { Button } from './ui/button'
import { Clock, BarChart, Users, Mail, Globe, Shield, Zap, Timer, BarChart2, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import  Navbar from "./navbar"
import {delay, motion} from 'framer-motion'
import React, { useState, useEffect, useCallback, useRef } from "react"


const About= ()=>{
    const [theme, setTheme] = useState("light");
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
    
      useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };

    const [isOpen,setIsOpen]= useState(false)
    
    const transition = {
        duration: 1.5
      };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          
        },
      };
      
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
      };

      const summary=`>>   "Counter Clock is not just a timekeeping application; it's a revolution in how we perceive and manage our most valuable resource - time. Born from the need for precision and efficiency in our fast-paced world, Counter Clock has quickly become the cornerstone of productivity for individuals and teams across the globe."`
      const long = `${summary}\n"Since our inception in 2023, we've been on a mission to transform time management from a mundane task into an empowering experience. Our state-of-the-art technology, coupled with an intuitive interface, ensures that every second counts towards your success."`;
       
      const handleSubscribe = () => {
        if (email) {
            setIsSubscribed(true);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
        } else {
            alert('Please enter a valid email address');
        }
    };

    const sampleCards = [
        { 
            image: "data:image/jpeg;base64,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", 
            name: "Alice Clinton", 
            review: "Very satisfied with the quality and service." 
        },
        { 
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhAVFRUVFRUVFRUVFRUVFRUVFRUXFhYVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGBAQGi0dHyUrLiswLS0tLS0tKysvKy0tLS0tLS0rLSstLS01Ny0tLS0tLS0tKy0tLS0tLS0rLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgQDB//EAEAQAAIBAgMGAwUFBgQHAQAAAAABAgMRBBIhBTFBUWFxBoGREyIyobFCUnLB8AcUIySS0TNiguE0Q2Oio7LCFv/EABgBAQADAQAAAAAAAAAAAAAAAAABAwQC/8QAIxEBAQADAAICAgMBAQAAAAAAAAECAxEhMRJBIjIEUYFhE//aAAwDAQACEQMRAD8A36BsQgAAEAMQxAACAkNCYAQALgxADYmxtkWAXE2IiwHcLkLizATuK5G4NgSYhZguA7ibE2IBsTExAMQCABMYgAQxABFokJhLzygSYBC4YgEAAAgGJgJgAhiAYADAQAJgJibGyLATZQ7e8U4fCtRm3KT+zCzfHfrpuZ4+O9qyw+Gbg2qlRqEGr6Pe3ez1snvPkMkk3KWrvd20u3venEi1Mje4n9oM25Olh1b7Mqknqvwrz4lB/wDucUqntHNb/h1yW5ZL/Pf1M3KpUl8EZW5K+v8AuctWMk7STvfUjrrj7psDb9PFU/aQ0a0nB74y/NcmWLrHw7Ye2amFnng+kk/hklwZ9K2L4gjiKaqJOOrTi3ezXXluJlc2NR7UmplTSxVzrhVJQ7LjueEZHopASbAVwuAxAAAyIxAAAIBiAQDv2AVgCVsIYggCBgAAAAIAYAAAACExiATIsbIsDIftMv8Aud1wq076L/Nu87FN+z7wvTxX8zVV4xlZR4Sa336Gj/aBQz4Gskr2yy7ZZxbfpc5vA+Inh8DSyUvaSmnUd5ZIxUm0ryfHTcU7byL9E7WyjsulTVo04rlaKRSbV2ZRaealB35xTPXZHiGpiJyhKnTVna0JubXd2RQ+KPFMoTdKEIXj8bqNpR9O69TNzt5GyeJ2vn/jDZkaElKEbRlw5M9vCWIy05fj/JHp4ixdTEUpSlGFoq6lSbcbx1aalqmV2xW409eMm18jVrvjyx7p+XY3GExfUuMLXMZhMQX+BrFqlpaUz3jIrsNUO2nIIdCZI80ySYEgEAARZIQAIYgAAAJCYCAIWwhsQCAAAQAAAAAAgAAExDEwExMdyLYEHRU/de57+q3287WPPZmwofu1PDS1VOCg1wbjv05Xue8J2afJnJtfG1VRq+y0nvVuCdk5d1qzPun21fx8vp07K2VRot+yir3s8qikny0SMtjaMFi6rqPLGcks11a73J8tx3YXC1Z0/ZyqexdN6XrRp5tL59zzRd29X3Mh4l2NUpydRVlVnKS0jXUtfvNKGWKRTJ1s9LbxLsyjTptRW9O/N3Vt5hXTyRimrPd3UdIvzRodqVKkcPCM55naTXSDSSTffNboZqrVcndvhbyRdql9s38jOc59uzCzL/Z9TcZmgy92fLcaGNqMJIs6TKbByLWiwh2RZNHlA9UBIBDABAACYDEACHYAIgMALUQxAIAAAAGADuIQAAxAAmJjZECLExsSYEWznrpq8opuyd4re106r5nQzm/estelS4zzX7KEn9UV7LPj5Wau/KcclLacJ0bwlFtJxWbjbgzHbfxloucpLpa7+psNr+E4zk506k6UpatxtZvrF6eZh9qeF6ik4yqOai7JNWXTRbzNOfbd88uciqVeVSMpS3KNl2S/SK5mjxmznTpNPfJZfXT8yu2lsuUXeKvb4lxvzRdrynpl3Y3xXHh95eYJlFh2XeBZeoaHBstqLKbCMtqDA7oM9onhBntFhCdxkRgMTGACAAAQMGABYQwAtGDAQAAAACAAAAAAAQAJiGyMgEQclzXqTly4/TscFOOWNOpL7SSlfnKKs/r/AFPmU5beeluOvvtHam0oUacqkpWjH4pO/uq61036Xt1sZtY6VTaGGdNNq8pvR/B7NpaP8afkz08X4edelTw0H79eo5NvRKlTje9uScoLu0WHh3ZkaOLoqMnJxoexs3dpQs4yfUrn5WdW/rLxsZNOJT1sGm3K27VmzeEhJe9FXe/h9Dx/cacVZQT76/U7umom6R88nsB4m8t0E75uajq0ue7eYintiGJrVcqyuMnFxb3pPKpro7K64H2zxA8tBwWjn7unCCV5W8tPNHxTF+HVQrqUG1nhKUJPjOPxp8NU1p1ZzljMfB88svLqp7HjWU3rGcdVJWs1a6uuP1OeWAq0bOcfde6UdY+fLzNd4fwOWV3a06al/wB0vykvkdG0aCz0op2WWqrdLws/IjHZYZYSs3gq6LnD1Cu2tg4wj7WCy2koyXByfJW09TnwWONGOUy9KMsbGnpyOiLKnDYg7qdQ6cutMaPOMiSYEwEhgAhiAAAAAAAC0EDEAAAAAAIBiAQAACuANhDf8/Qi2eTnJVKf3XnT72936Pzsc53kdYzte9SX2vXtz/XUp9tVstJwV7NKK6ONpR+ljtxuJdOStG8Z3XaaV0u0tV3sVMaqqtwje2ZLXRpKcGrrhpJ+SMdao8PFW0I4WNTE2WenShRoR+9VqPM1bklGEvItv2T7IcaLrVm5VZ1JynKWrbcYLf6mY2zg5YrGa/4NCb04SrOMbvso5F3zH03wfSy0F1c3/wCSS/JFmq/lz/jjZOY9XiIU9by8kOrKybJUlaK6LU1MzPeI5b3ytBfKUvnlXkYnadFVcTh6O/IqlWT5KyhFPu2/6TZeI3aNNPe1KT82ZHZkksRWqPe/Zx7Ry5ku3vX82ZNl/KtOufi7dkNezhzp3g/JuL+cUzzx017enG+qpVZvorws36P0IYZ5MRXpX0klUivxKz+afqVFaPtqleo5ZabcaUpK7k4U1/hwW9ylOUt3DucR28nUeIlTS+GpVzxj/wBOmsqb7vMzN4qtkrVIp6Z5W7X0NVXozhCpVaySlHJGK/5VJKygmvtPiY3aMPt8mk+z3Fuq8qvZPC8wONL7C4i5hcFXNHs/EGhQ08JnRFlZh6p205kjpQyEWSQQkAgAAAAABABZgAAAAJgAAIAABMAItgyIAwhXhNe7JSS4Lfpv0PObSTbenF9D3jGysoXS4JpNdVcz7r6i/Tj14YyKtlnZxl19E+T5MzE3+6YhuUsyqw/h/ebhJJRfOV6iSfHRdXsnQslq+fs5peif+5mPEmy1Xyyppwq0XKcYt8Wrac43S3cuBT1q/wDL+nfDDKMUuLlKbfNzcpPXvI2Xhr/h4f6l6VJGF2BjlWw92rTh7k4vfGUdbM2fhOreg192pNetpf8A0dafGz/FG39P9WtbWy6/JE5aw/Fp6u30PKpI9XpGPeP1NjKyPiypmquK5RgunN+V5ehla9b3qluFVryVKnp9S725W/nPZcEqtSXk1GK83KX9Jnasre1XKpm9acDFl7rXj6i1q4O81XU1fKqaV7tqS3yW/j+r6cnhqlSoUqjq1U3Tq1c1SSywUpyc5ZM34rN910OWpj6jdSnTbvTw+HyRVtatW6jd26eWrLKlsCl7OnCpTjVlFfFNXSl9qST3Xbb5u+pETVTtPb2GxD9nDNOKd7xTs/MrfECUsJKcaXs4qcFG++euvkbFYOnBp5Vpwikl6GK8bbTlX/hxhJRg77nrbf8A3O8fccZemYw8y7wFYz1KRaYKoamdrsFWLajIzmBql3h5kiygz0RzU5HvFhD0uBFDQDAGICQguIC0YgAAEAMAAQAAmwEwE2RY2RYEoQv2/Whx1se1L3YWyy1zZfei1bSz0fcNo07wdm1bXRtN9NOx4U3Jfw4RWeyu2s1m1eyit77mXdl+TTpx8diyr42MoXTclxp/aX4X/f5HjCOdKV7pa0565ktzjL5r6nng/D1VS9rUryv92KitOTtvO14C0cqbt39Sq9a8cp9slHHezxUaiSUKjdOouDa0jLyv6N8jYeC8TapiKDe7LUj1VnFtekPUp8d4dp1E05TV3mumrp9NOp2bPwTpVlXjNuSg4NNK0k+fay9CcMvjlK53YzOXjZRV02etf4O1vkUEtoVcuW6S6LX1Z5SrSlvk33bZfd8+mWfx791mcTOc9oY2rkk4wUacPddpNXk8vPWTM3SxMpSlHK4zq1WoqSaslFKU2uSUWz6TKGl7FLtPKnwuyi37aJjIpvDFNSxGJqOMl71FU8ycXkhScIuztr8fqX+PxDhDNFZpSdoLm3+mU+C2hCMrN6v3W+id/omWVXFZtXJQS3JpqXe8t3oR3rnLHlU2Jp4iKdSdVJLVrdHtzMPtapb+NTbtOTTX3ZcUzX7Rmm7ylOzum5SbptctG4rzsZHbNqcp098ZwzR7xas++q9CzD2rz9Kamzvw0ivgzsw8jWzNHgahe4WZmsDIvcJMC5pM6Ys4aMjrgwh7pkkecWSTAkAhgFxDEBZgFwYAIBAMBAAAIAEyDJMgwOLH3z0275I5m0uMrO1y+2bs1U02mnOWs5Pe299uS4W6Iqa0FJOLWjLWjjdLszbMOXrVqy7OOl05EZdStr7Zina+p4vHN/aS77/Qr6t+NWc5pHHPFLccFWsnvqMrsbtrD0NLqU+rv6LiQnnF+6+l3uKzHbfhT3ySvolvbfLv0RnY4nFYuVo3p0+dk5W6R3LzuaTZGzaFDVQvNrWc7ub/ANT3LotA64rqWJxuJvkToQ+9OLUn+GGj9Wuxc4fYqSSnVnN8dyv6K/zO9YmL3WB1URxPy/pxPYeH35LNcbu/e9zP7VpTwzzwcpU765dbX+9Gz+Vv76idLNxOeps5PfJkXFHWdwmPp1VJSjHd7y4NPc0+TMd4v2dTpqMqc9HJ2pvVwT32l926WjNL4jwMKMs1LRNSjJcn8V/kYjH1M8HNttuShq77tXb0LNUvVO6STivgddA5YHTRNjGuMHIvcJIz+ELzCMJXNCR202V9BndSYQ6YkkQiTQDQxDALgIALMQAACAAABXABoTAGAiMhtkWwIs8a0Mytdrs7HrI85CyX2mWzzFdPZtNX0f8AXP8AuZraKrwllpTe6+uuvmbJo4/3FObl0aM+6Sc4v1ZW97WF/nKit7Rrm4qz9f7FXg9gSlipqWqh7FTbbbvVm0lr2Z9QoYKK4GZ2dSUtoV1yr4aL7RjOVvWxxhleus30bDbAppaRs3us2voetXYk01GNS+l3mV7eZe045Vme/gGW0W+LNNwlUTPKfbBbWrvDpSqU7xbaUoq+q521KuXiXDrVu3e6+puvFOETw9raxkpfk/qYfaWzIVKMkoq+V8DNsxmN4069lsedPxnRW6cbdycfFkJu0Zx15tGA2BhFOFmtVp6FhidjW1SIuMnhM2X3x1eLtqRjFU4yTk3eyd7c2zIzrOWnC7aXdk9o4TJK9tJfXieEDRhjJGfbsuV8vamjqoxOemjtw8SxU78LEusKiswsS3w0QlY0DupI46COymEOiJNEIk0BIYkADAAA7oyJAAQTFcYBJNgAEgBgAEWyMmIAhFkJABAjDeidKOr7ABm3ftGjV6SkjHeHqTnj60VpmxlNN/5YUc8v11GBxr9us/T7FDV34Lceijd9gA2sqq2880HHmZXD/C10ADNv9xfq+3zTZCyYitT5VJf+zNjRhmgugAV5e1k9KPb+yc0XbfvXdbjExXAQF2q+Kq2e3TSLDDoALlS3wqLfDRAALGijqgAAe0T0iAASuFwACGYAAkf/2Q==", 
            name: "Carl Tim", 
            review: "Great experience, will definitely use again." 
        },
        { 
            image: "data:image/jpeg;base64,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", 
            name: "Emily Ramen", 
            review: "Exceeded my expectations in every way." 
        },
    ];
    
    const SlidableCards = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const cardsPerView = 3; // Number of cards to show at a time
    
        // Function to slide to the next set of cards
        const slideNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(sampleCards.length / cardsPerView));
        };
    
        // Set interval to slide cards every 5 seconds
        useEffect(() => {
            const interval = setInterval(slideNext, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval); // Cleanup on unmount
        }, []);
    
        // Get the currently displayed cards
        const displayedCards = sampleCards.slice(currentIndex * cardsPerView, (currentIndex + 1) * cardsPerView);    

    };
      
      return(
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <header className="bg-gradient-to-r from-[#0D9488] to-[#0A766E] dark:from-[#0C8378] dark:to-[#075E53] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="mb-12 lg:mb-0 text-center lg:text-left">
                            <h1 className="text-5xl font-bold mb-4">Counter Clock</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Matering Time, Empowering Progress
                            </p>
                            <Button className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-[#2b9d94] dark:text-blue-100 dark:hover:bg-blue-800 text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">
                                Start Free Trial
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
    {[
        { icon: Timer, title: "Precise Timing" },
        { icon: BarChart2, title: "Smart Analytics" },
        { icon: Layers, title: "Team Sync" },
        { icon: Shield, title: "Data Security" },
    ].map((item, index) => (
        <motion.div
            key={index}
            className="flex flex-col items-center bg-blue-400 bg-opacity-20 dark:bg-blue-900 dark:bg-opacity-30 p-6 rounded-lg backdrop-blur-sm transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-900 hover:bg-opacity-50 dark:hover:bg-blue-400 dark:hover:bg-opacity-50"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: index * 0.2, damping: 15, stiffness: 70 }}
        >
            {/* Render the icon */}
            <item.icon className="w-12 h-12 text-blue-300 dark:text-blue-300 transition-colors duration-300" />

            {/* Title */}
            <span className="text-lg font-semibold text-center mt-4">{item.title}</span>
        </motion.div>
    ))}
</div>


                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-[#0D9488] dark:text-blue-300 mb-8 text-center">About Counter Clock</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                        onClick={()=>setIsOpen(!isOpen)}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden  transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        transition={transition}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        >
                            <motion.p 
                            className="text-[#0D9488] dark:text-blue-300 mb-4 whitespace-pre-line"
                            transition={transition}>
                              {isOpen?long:summary} 
                            </motion.p>
                            
                        </motion.div>
                        <motion.div 
                        className="bg-blue-50 dark:bg-[#0D9488] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.2, delay:0.34,stiffness:10}}
                        >
                            <h3 className="text-2xl font-semibold text-[#0D9488] dark:text-blue-200 mb-4">Our Vision</h3>
                            <p className="text-[#0D9488] dark:text-blue-300 text-lg">
                                To create a world where time is valued, utilized, and celebrated, enabling individuals and organizations to achieve their fullest potential.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-[#0D9488] dark:text-blue-300 mb-8 text-center">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                              { icon: Clock, title: "Precise Timekeeping", description: "Accurate to the millisecond, ensuring you never miss a beat in your productivity journey." },
                              { icon: BarChart, title: "Detailed Analytics", description: "Gain deep insights into your time usage with comprehensive, customizable reports." },
                              { icon: Users, title: "Team Collaboration", description: "Seamlessly track time across teams and projects, fostering a culture of efficiency." },
                              { icon: Zap, title: "Smart Automation", description: "Automate repetitive time-tracking tasks and focus on what truly matters." },
                              { icon: Globe, title: "Cross-Platform Sync", description: "Access your time data anywhere, anytime, across all your devices." },
                              { icon: Shield, title: "Data Security", description: "Your time data is protected with state-of-the-art encryption and security measures." },
                        ].map((feature,index)=>(
                            <motion.div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 rounded-lg border bg-card text-card-foreground shadow-sm border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-light-blue-600 hover:shadow-lg transition-shadow duration-300 ease-in-out "
                            whileHover={{scale:1.03}}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            transition={{delay:index*0.2,damping:6,restDelta:0.0000001} }
                            >
                                <CardHeader>
                                    <CardTitle className="flex items-center text-[#0D9488] dark:text-blue-300">
                                        <feature.icon className="mr-3 h-6 w-6"/>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#0D9488] dark:text-blue-400">{feature.description}</p>
                                </CardContent>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-[#0D9488] dark:text-blue-300 mb-8 text-center">Why Choose Counter Clock?</h2>
                    <div className="bg-[#0D9488] text-white p-10 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Unlock Your Productivity Potential</h3>
                        <ul className="list-disc list-inside space-y-3 mb-8 max-w-2xl mx-auto">
                            <li>Boost individual and team productivity by up to 25%</li>
                            <li>Reduce time waste and optimize resource allocation</li>
                            <li>Make data-driven decisions with our advanced analytics</li>
                            <li>Seamless integration with popular project management tools</li>
                            <li>24/7 customer support to ensure smooth operation</li>
                        </ul>
                        <div className="text-center">
                            <Button className="bg-white text-blue-600 hover:bg-blue-50  dark:hover:bg-blue-800 text-lg px-8 py-3">
                                Start Your Free Trial
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
            <h2 className="text-3xl font-semibold text-[#0D9488] dark:text-blue-300 mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleCards.map((card, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white dark:bg-gray-800 rounded-lg border border-[#0D9488] shadow-sm hover:shadow-lg transition-shadow p-4"
                        whileHover={{ scale: 1.03 }}
                    >
                        <img 
                            src={card.image} 
                            alt={card.name} 
                            className="rounded-full h-32 w-32 mb-4 object-cover mx-auto"
                        />
                        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 text-center">{card.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-center">{card.review}</p>
                    </motion.div>
                ))}
            </div>
        </section>
                
                <section>
                    <h2 className="text-3xl font-semibold text-[#0D9488] dark:text-blue-300 mb-8 text-center">Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <p className="text-[#0D9488] dark:text-blue-300 mb-6 text-lg">
                                We're always excited to hear from you! Whether you have questions, feedback, or just want to share your Counter Clock success story, our team is here to listen and assist.
                            </p>
                            <div className="sapce-y-4">
                                <p className="flex items-center text-[#0D9488] dark:text-blue-300">
                                    <Mail className="mr-3 h-6 w-6"/>
                                    <a href="mailto:info@counterclock.com" className="hover:underline">info@counterclock.com</a>
                                </p>
                                <p className="flex items-center text-[#0D9488] dark:text-blue-300">
                                    <Globe className="mr-3 h-6 w-6" />
                                    <a href="https://www.counterclock.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.counterclock.com</a>
                                </p>
                            </div>
                        </div>

                        <Card className="bg-blue-50 dark:bg-[#0D9488] border-blue-200 dark:border-blue-700">
                            <CardHeader>
                                <CardTitle className="text-[#0D9488] dark:text-white text-2xl">Stay Updated</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#0D9488] dark:text-white mb-6">Subscribe to our newsletter for the latest updates, tips, and exclusive offers.</p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-grow px-4 py-2 border border-blue-300 dark:border-blue-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Button onClick={handleSubscribe} className="rounded-r-md bg-[#0D9488] text-white hover:bg-[#0D9488] dark:bg-[#176a63] dark:hover:bg-blue-800">
                                        Subscribe
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            {showNotification && (
                    <motion.div
                    className="fixed bottom-10 left-1/2 bg-blue-900 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    Thank you for subscribing!
                </motion.div>
                )}
        </div>
    )
}

export default About