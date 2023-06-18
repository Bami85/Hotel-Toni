import PrimaryButton from '../../../components/Button/Primary-Button';
import React from 'react';

export default function AboutSection() {

    return (
        <section className={ `flex-v-center flex-col sm:flex-row container my-10` }>
            <div className={ `sm:basis-3/2 md:basis-1/2` }>
                <img className={ `w-full sm:w-2/6 md:w-4/5 lg:w-[40%] rounded-md mx-auto` } src="/images/toni.png" alt="" />
            </div>
            <div className={ `mr-auto md:mx-auto` }>

                <h4 className={ `text-2xl my-5 uppercase font-medium` }>Rreth Nesh </h4>

                <h1 className={ `text-4xl my-5 leading-[45px] font-semibold` }>Pushimet më të mira fillojnë këtu te Hotel Toni!
                </h1>

                <p className={ `text-gray-500` }>
                    <br />
                    Hotel Toni është një destinacion i mrekullueshëm për pushimet, i vendosur në mes të pishave të bukura te Llogorase. Ky hotel ofron një ambient të qetë dhe të ngrohtë për të relaksuar dhe shijuar pushimet tuaja ne qetesi apsolute. Lokacioni i tij në mes të natyrës dhe vetem pak minuta me makine dhe vetem 15 minuta me makine nga detit e bën atë një zgjedhje ideale për ata që duan të shijojnë ajrin e pastër malor dhe të relaksohen në bregdet. Akomodimet e rehatshme dhe stafi miqësor janë gati për të siguruar qëndrimin tuaj të mrekullueshëm. Hotel Toni është vendi ku mund të gjeni qetësi, natyrë dhe relaksim në një paketë tërheqëse për pushimet tuaja.
                    <br />
          
                </p>

                <div className={ `my-5` }>
                    <PrimaryButton children={ `Read More` } />
                </div>

            </div>
        </section>
    );
};