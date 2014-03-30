from __future__ import absolute_import, division
from flask import render_template
from application import app


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home_handler(path):
    wedding_party = [
        {
            'name': 'Alli Wick',
            'title': 'Maid of Honor',
            'image': 'alli_v01.jpg',
            'description': '''
                Alison first met Alli Wick Freshman year of high school in Granite Bay, CA. Destined to be lifelong friends they shared the same name and wore the exact same outfit the day they met! They have been there for each other every step of the way, whether it was dealing with parents battling cancer, pining over Justin Timberlake, visits to Spokane, laughing and crying over heartbreaks, Halloween celebrations, and wine night hot tub chats, Alison can always count on Alli to be there for her. Alli is truly the most thoughtful, fun, caring, dedicated, and cherished best friend a girl could ask for. Alli is currently living in Roseville, CA where she is a dedicated tri-athlete, fantastic caregiver, and studying to be a personal trainer. Alison feels truly blessed to have her lifelong best friend Alli as her maid of honor on her special day.
                '''
        },
        {
            'name': 'Kelly McGonigal',
            'title': 'Bridesmaid',
            'image': 'kelly_v01.jpg',
            'description': '''
                Alison met Kelly as a freshman in high school but didn't become close friends with her until after getting involved in student government Junior year. Kelly is the go-to laugh girl, from downing meatball sandwiches in the back of Mr. Westberg's classroom or trying on velvet one piece jumpsuits, Alison can always count on Kelly for a hysterical night! Kelly has recently moved to San Francisco from Boston to be closer to family and friends. She is currently making a splash in the dental sales world as a top performing Digital Technology Specialist. Kelly is truly the heartbeat around a great night out, a glass of wine in, or a cafe gab session. Be on the look out for her on the dance floor!
                '''
        },
        {
            'name': 'Vineetha Pathrose',
            'title': 'Bridesmaid',
            'image': 'vineetha_v01.jpg',
            'description': '''
                Kellen and Alison became friends with Vineetha just a few years ago here in San Francisco. Vineetha, a Texas native, moved to SF with her current PR firm Edelman in 2011, where Kellen was first employed here in San Francisco. Vineetha was quickly adopted into the Edelman friend circle as she joined the Texan cheering section of the 2011 World Series watch parties. Alison and Vineetha instantly became friends; whether it was Saturday college football bar days, planning Sunday family dinners, or nights out on the town Vineetha's contagious laugh and Texas hospitality are sure to be there. Kellen and Alison couldn't be more excited to see where Vineetha's adventures take her next - crossing their fingers that they have another friend to visit in London soon!
                '''
        },
        {
            'name': 'Grace Wallace',
            'title': 'Bridesmaid',
            'image': 'grace_v01.jpg',
            'description': '''
                Grace and Alison have been great friends for almost 10 years! They instantly connected while participating on a Gonzaga pre-orientation camping/river rafting trip in Montana. They quickly became teammates, drinking mates, housemates, and most importantly, inseparable friends. Grace helped Kellen and Alison transition to San Francisco by always opening her home for frequent visits, weekend stays, and great parties! Grace is constantly helping Kellen and Alison explore this amazing city by introducing them to all sorts of new adventures. Grace is one of the most beautiful people they know both inside and out. Her heart for others, dedicated friendships, and true adventurous spirit are contagious.
                '''
        },
        {
            'name': 'Nicholas Deccio',
            'title': 'Best Man',
            'image': 'nick_v01.jpg',
            'description': '''
                Kellen and Nick have been friends since 8th grade where they met in Spokane at University High School Summer football practice. In high school Kellen and Nick spent time together hanging out at lake Coeur d' Alene, evading police after long nights of underage drinking, and helping each other through tough family times. Kellen chose Nick to be his best man because he can count on him to be there anytime of the day for any reason; Nick is truly a man who would give you the shirt off his back. Kellen and Alison are excited to see Nick on a new adventure in St.. Louis MO where he recently moved with his fiancee Adelina.
                '''
        },
        {
            'name': 'Greg Babel',
            'title': 'Groomsman',
            'image': 'greg_v01.jpg',
            'description': '''
                Kellen first met Greg in Roncalli at Gonzaga University as they lived down the hall from one another. A long lasting friendship was born after losing in a dorm rivalry flag football game and discovering that they were the only two that seemed to be angry! They share a love of music (although not always aligned), video games, and craft beers. Greg is currently living in London town working towards his second post graduate degree graduating with his MBA from London School Economics in Spring of 2015.
                '''
        },
        {
            'name': 'Jarod Field',
            'title': 'Groomsman',
            'image': 'jarod_v01.jpg',
            'description': '''
                Jarod and Kellen's friendship started back at GU during Jarod's "2nd" Senior year shenanigans. Their friendship grew after Kellen introduced Jarod to Alison during the Cambridge wedding weekend celebration. Initially, Alison's first thoughts were, "Who is your creepy friend Jarod, not a fan". But a short 4 years later, a few trips to Vegas, many dance floors and stripper poles, fashion advice conversations, and trips around the world together, Kellen had to fight Alison to keep Jarod on his side of the bridal party. Jarod is the life of the party, an amazing listening ear, and one of the best friends we could ask for. We couldn't be more excited to have Jarod share this special day with us as he is truly an extended member of our family.
                '''
        },
        {
            'name': 'Justin Meeks',
            'title': 'Groomsman',
            'image': 'justin_v01.jpg',
            'description': '''
                Like Greg, Kellen met Justin as a freshman at Gonzaga University as dorm-mates in Roncalli hall. They quickly became friends as they realized their love of super smash brothers and winter activities! Kellen and Justin ended up living together the rest of their time at GU after which Justin joined the Peace Corps and spent time in Mali Africa helping to engineer a sustainable water filtration system. Justin met his fiancee Caitlin while in the Corps and they are celebrating their wedding just a few weeks before Kellen and Alison in Kentucky.
                '''
        },
        {
            'name': 'Andrew Cambridge',
            'title': 'Ring Bearer',
            'image': 'andrew_v01.jpg',
            'description': '''
                Kellen and Alison's Godson Andrew is the son of their great friends Chris and Catie Cambridge. Kellen first met Chris their Freshman year at Gonzaga University and along with most of the other wedding party has been in all sorts of trouble over the past 9 years! While Chris and Kellen's friendship grew so did Catie and Alison's as they had a few classes together  their Sophomore and Junior year. Chris and Catie fell in love and were married in Spokane soon after graduation. The Cambridge family now lives in Tigrid OR where Catie completed law school, and has most recently been raising their adorable son, Andrew. Chris is currently a Foundry Engineer and has taken well to being an amazing father! They are expecting a baby girl to join their family this June.
                '''
        },
        {
            'name': 'Harper Guzenski',
            'title': 'Flower Girl',
            'image': 'harper_v01.jpg',
            'description': '''
                Kellen and Alison's niece, Harper Jo Guzenski, blessed Andy and Leah Guzenski  in June of 2012 and has been bringing the family smiles and giggles ever since. While Harper has most recently been learning her ABC's, counting to 13, and signing over 50 different signs; she has also taken to spending time telling stories, singing songs, snuggling with her favorite furry friend Harlo, and facetiming with her family afar. Alison had the honor of becoming Harper's Godmother in November of 2012 and takes every chance she can get to spend time with her. Kellen and Alison occasionally get down to visit San Diego where Andy and Leah currently live. While it was unplanned, October 18th has brought luck, love, and happiness to Andy and Leah; they couldn't feel more blessed to be sharing our anniversary with them for a lifetime to come.
                '''
        },
    ]
    return render_template('home.html', wedding_party=wedding_party)
