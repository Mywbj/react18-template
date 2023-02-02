import React, { memo } from 'react'
import { Spin } from 'antd'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { WebGlWrapper } from './css'

const WebGl = memo(() => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: 'EZhouAirport1205/Build/EZhouAirport1205.loader.js',
    dataUrl: 'EZhouAirport1205/Build/EZhouAirport1205.data.unityweb',
    frameworkUrl: 'EZhouAirport1205/Build/EZhouAirport1205.framework.js.unityweb',
    codeUrl: 'EZhouAirport1205/Build/EZhouAirport1205.wasm.unityweb',
    cacheControl: handleCacheControl
  })

  function handleCacheControl(url: string) {
    if (url.match(/\.data/) || url.match(/\.bundle/)) {
      return 'must-revalidate'
    }
    if (url.match(/\.mp4/) || url.match(/\.wav/)) {
      return 'immutable'
    }
    return 'no-store'
  }

  const loadingPercentage = `${Math.round(loadingProgression * 100)}%`
  return (
    <WebGlWrapper>
      {!isLoaded && <Spin tip={loadingPercentage} spinning={!isLoaded} className="spin" />}
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </WebGlWrapper>
  )
})

export default WebGl
