import {
  CardWrapper,
  CardHeader,
  PriceBlock,
  SubtitleBlock,
  FeatureList,
  CriticalList,
  InfoWrapper,
  Tooltip
} from './Hero.styles';
import { heroData } from '../../data/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function PlanCard() {
  const {
    saludText,
    plan: { features, footerLabel, priceMonth, priceDay },
    criticalItems
  } = heroData;

  return (
    <CardWrapper>
      <CardHeader>{saludText}</CardHeader>
      <PriceBlock>
        <h2>
          {priceMonth} <small>/ mes</small>
        </h2>
        <div>
          {priceDay} <small>/ día</small>
        </div>
      </PriceBlock>
      <SubtitleBlock>Ideal para acompañar tu obra social ó prepaga</SubtitleBlock>
      <FeatureList>
        {features.map(f => (
          <li key={f}>
            <FontAwesomeIcon icon={faCheckCircle} /> {f}
          </li>
        ))}
      </FeatureList>
      <CriticalList footerLabel={footerLabel}>
        {criticalItems.map(item => (
          <li key={item.label}>
            <span>
              {item.label}
              <InfoWrapper>
                <FontAwesomeIcon icon={faInfoCircle} />
                <Tooltip>{item.tooltip}</Tooltip>
              </InfoWrapper>
            </span>
            <strong>{item.amount}</strong>
          </li>
        ))}
      </CriticalList>
    </CardWrapper>
  );
}
