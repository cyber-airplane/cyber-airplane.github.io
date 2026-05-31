import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAircraftByName, AircraftDetail } from '../services/aircraftService'
import { createMarkdownProcessor, createDirectFetcher, type HeadingNode } from 'mark-deco'
import './AircraftDetail.css'
import '../components/css/markdown.css'
import '../components/css/parameter-card.css'

export default function AircraftDetailPage() {
  const { name } = useParams<{ name: string }>()
  const [aircraft, setAircraft] = useState<AircraftDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [htmlContent, setHtmlContent] = useState('')
  const [headings, setHeadings] = useState<HeadingNode[]>([])

  useEffect(() => {
    async function loadAircraft() {
      if (!name) {
        setError('Missing aircraft name')
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      const data = await fetchAircraftByName(name)

      if (data) {
        console.log('完整数据:', data)
        setAircraft(data)

        if (data.desc) {
          console.log('原始 desc 内容:', data.desc)
          const fetcher = createDirectFetcher('mark-deco/1.0.0')
          const processor = createMarkdownProcessor({ fetcher })
          const result = await processor.process(data.desc, 'aircraft-detail', {
            headerTitleTransform: 'none'
          })
          
          console.log('解析后的 HTML:', result.html)
          console.log('标题树:', result.headingTree)
          
          setHtmlContent(result.html)
          setHeadings([...result.headingTree])
        }
      } else {
        setError('Aircraft not found')
      }

      setLoading(false)
    }

    loadAircraft()
  }, [name])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderHeadingTree = (nodes: HeadingNode[], level: number = 1) => {
    return (
      <ul className="heading-tree__list">
        {nodes.map((node) => (
          <li
            key={node.id}
            className={`heading-tree__item heading-tree__item--level-${level}`}
            onClick={() => scrollToHeading(node.id)}
          >
            {node.text}
            {node.children && node.children.length > 0 && (
              renderHeadingTree(node.children, level + 1)
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <main className="aircraft-detail__main">
      {loading ? (
        <div className="aircraft-detail__loading">
          <span className="crt-glow">LOADING...</span>
        </div>
      ) : error || !aircraft ? (
        <div className="aircraft-detail__error">
          <span className="crt-glow">ERROR: {error || 'Unknown error'}</span>
        </div>
      ) : (
        <>
          <div className="aircraft-detail__hero-section">
            <div className="aircraft-detail__hero-wrapper">
              {aircraft.pic ? (
                <img
                  src={aircraft.pic}
                  alt={aircraft.name}
                  className="aircraft-detail__hero-image"
                />
              ) : (
                <div className="aircraft-detail__hero-placeholder" />
              )}
            </div>
          </div>
          <div className="aircraft-detail__terminal">
          <div className="aircraft-detail__header">
            <h1 className="aircraft-detail__model crt-glow">
              {aircraft.name}
            </h1>
          </div>
          <div className="aircraft-detail__badges">
            <span className="aircraft-detail__badge">{aircraft.country}</span>
            <span className="aircraft-detail__badge">{aircraft.type}</span>
            {aircraft.maker && (
              <span className="aircraft-detail__badge">{aircraft.maker}</span>
            )}
          </div>

          <div className="parameter-section">
            <div className="section-header">
              <h2 className="section-title crt-glow">+-- 参数 --+</h2>
              <div className="section-divider" />
            </div>
            <div className="parameter-grid">
              {aircraft.cruise != null && (
                <div className="parameter-card">
                  <span className="parameter-label">巡航速度</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.cruise}</span>
                    <span className="parameter-unit">km/h</span>
                  </div>
                </div>
              )}
              {aircraft.max_speed != null && (
                <div className="parameter-card">
                  <span className="parameter-label">最大平飞速度</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.max_speed}</span>
                    <span className="parameter-unit">km/h</span>
                  </div>
                </div>
              )}
              {aircraft.max_ceiling != null && (
                <div className="parameter-card">
                  <span className="parameter-label">最大升限</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.max_ceiling}</span>
                    <span className="parameter-unit">km</span>
                  </div>
                </div>
              )}
              {aircraft.voyage != null && (
                <div className="parameter-card">
                  <span className="parameter-label">航程{aircraft.voyage_note ? `（${aircraft.voyage_note}）` : ''}</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.voyage}</span>
                    <span className="parameter-unit">km</span>
                  </div>
                </div>
              )}
              {aircraft.combat_radius != null && (
                <div className="parameter-card">
                  <span className="parameter-label">作战半径</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.combat_radius}</span>
                    <span className="parameter-unit">km</span>
                  </div>
                </div>
              )}
              {aircraft.g_limit != null && (
                <div className="parameter-card">
                  <span className="parameter-label">过载限制</span>
                  <div className="parameter-value-row">
                    <span className="parameter-value">{aircraft.g_limit}</span>
                    <span className="parameter-unit">G</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {aircraft.desc && (
            <div className="markdown-container">
              <div className="section-header">
                <h2 className="section-title crt-glow">+-- 详情 --+</h2>
                <div className="section-divider" />
              </div>
              <nav className="heading-tree">
                <h3 className="heading-tree__title crt-glow"> 「 目录 」</h3>
                {headings.length > 0 ? (
                  renderHeadingTree(headings)
                ) : (
                  <p className="heading-tree__empty">暂无目录</p>
                )}
              </nav>

              <article
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          )}
          </div>
        </>
      )}
    </main>
  )
}