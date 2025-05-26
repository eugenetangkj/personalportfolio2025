import { ColourEnum } from "@/types/Colours"

/**
This component represents a card used in the About Me section. It displays the core values.
*/
interface AboutMeProps {
    title: string,
    paragraphText: string,
    colour: ColourEnum,
    value: string,
}


export default function AboutMeCard({ title, paragraphText, colour, value }: AboutMeProps) {
    return (
        <div className={`flex flex-col justify-between rounded-xl bg-portfolio-blue px-8 py-0 overflow-y-hidden grid-rows-1 grid-cols-1
        ${ colour == ColourEnum.BLUE ? 'bg-portfolio-blue' : colour == ColourEnum.PURPLE ? 'bg-portfolio-purple' : 'bg-portfolio-orange' }`}>
            {/* Text */}
            <div className='flex flex-col items-start space-y-3 pt-8 pb-0'>
                <h6 className={`text-3xl ${ colour == ColourEnum.BLUE ? 'text-portfolio-darkblue' : colour == ColourEnum.PURPLE ? 'text-portfolio-darkpurple' : 'text-portfolio-darkorange' }`}>{ title }</h6>
                <p className='text-subparagraph'>{ paragraphText }</p>
            </div>

            {/* Faint text */}
            <h6 className={`card-faint-text ${ colour == ColourEnum.BLUE ? 'text-portfolio-lightblue' : colour == ColourEnum.PURPLE ? 'text-portfolio-lightpurple' : 'text-portfolio-lightorange' }`}>{ value }</h6>
        </div>
    );
  }
  