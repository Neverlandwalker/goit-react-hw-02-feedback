import { PropTypes } from 'prop-types';
import { FeedbackButtonList, FeedbackButton } from 'components/FeedbackForm/FeedbackForm.styled';
import { Section } from 'components/Section/Section';




export const FeedbackForm = ({ options, onLeaveFeedback }) => {
    return (
        <Section title='Please, leave Feedback'>
            <FeedbackButtonList>
                {options.map(( option, index ) =>  (
                        <li key={index}>
                            <FeedbackButton type='button' onClick={() => onLeaveFeedback(option)}>
                                {option}
                        </FeedbackButton>
                        </li>
                    
                )
                )}
                
            </FeedbackButtonList>
        </Section>
    );
};



// for build



FeedbackForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};