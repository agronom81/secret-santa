const HeaderWithRulers = ({ className, heading, withRules = true }) => {
  const withRulesClass = withRules ? 'with-rulers' : ''

  return (
    <div
      className={`${withRulesClass} font-condensed text-7xl uppercase ${className}`}
    >
      {heading}
    </div>
  )
}

export default HeaderWithRulers
